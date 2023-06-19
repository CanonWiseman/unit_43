import './App.css';
import {useState, useEffect} from "react";
import { NavBar } from './NavBar';
import {BrowserRouter } from "react-router-dom";
import { Router } from './Router';
import JoblyApi from "./api";
import UserContext from './UserContext';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

  const [currUserName, setCurrUserName] = useState(useLocalStorage("username", "getItem"));
  const [token, setToken] = useState(useLocalStorage("token", "getItem"));
  const [currUser, setCurrUser] = useState(null);
  

  async function Login(userData){
    let res = await JoblyApi.login(userData);
    setCurrUserName(userData.username);
    useLocalStorage("token", "setItem", res.token)
    useLocalStorage("username", "setItem", userData.username);
    setToken(res.token);
  } 

  async function SignUp(userData){
    let res = await JoblyApi.register(userData);
    setCurrUserName(userData.username);
    useLocalStorage("token", "setItem", res.token)
    useLocalStorage("username", "setItem", userData.username);
    setToken(res.token);
  }

  function Logout(){
    localStorage.clear();
    setCurrUser(null);
    JoblyApi.logout();
  }

  useEffect(() => {
      async function getUser(){
        if(token){
          JoblyApi.setToken(token); 
          let res = await JoblyApi.getUser(currUserName);
          setCurrUser(res);
        }
      }
      getUser()
  }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{currUser, Login, Logout, SignUp}}>
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
