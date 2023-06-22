import './App.css';
import {useState, useEffect} from "react";
import { NavBar } from './NavBar';
import {BrowserRouter } from "react-router-dom";
import { Router } from './Router';
import JoblyApi from "./api";
import UserContext from './UserContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import {  decodeToken } from "react-jwt";


function App() {

  const [token, setToken] = useLocalStorage("token")
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState(new Set([]));

  async function Login(userData){
    try{
      let res = await JoblyApi.login(userData);
      setToken(res.token);
    }
    catch(e){
      return e
    }
  } 

  async function SignUp(userData){
      try{
        let res = await JoblyApi.register(userData);
        setToken(res.token);
      }
      catch(e){
        return e
      }
  }

  function Logout(){
    setCurrUser(null);
    setToken(null);
  }

  function hasAppliedToJob(id) {
    return applications.has(id);
  }

  async function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    await JoblyApi.applyForJob(currUser.username, id);
    setApplications(new Set([...applications, id]));
  }

  useEffect(() => {
      async function checkForUser(){
        if(token){
          try{
            const payload = decodeToken(token);
            JoblyApi.setToken(token); 
            let res = await JoblyApi.getUser(payload.username);
            setCurrUser(res);
            setApplications(new Set(res.applications));
          }
          catch{
            setCurrUser(null);
          }
        }
        setLoading(false);
      }
      setLoading(true);
      checkForUser();
  }, [token]);

  if(loading){
    return <></>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{currUser, Login, Logout, SignUp, loading, setCurrUser, hasAppliedToJob, applyToJob}}>
            <NavBar/>
              <main>
                <Router/>
              </main>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
