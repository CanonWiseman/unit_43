import {useState, useEffect} from "react";
import JoblyApi from "../api";

export function useFetch(initialValue, apiCall, params=""){
    const [data, setData] = useState(initialValue);
    const [apiFunc, setApiFunc] = useState(apiCall);
    const [currParams, setCurrParams] = useState(params);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        async function makeCall(){
            setIsLoading(true);
            const res = await JoblyApi[apiFunc](currParams);
            setData(res);
            setIsLoading(false);
        }
        makeCall();
    }, [currParams]);

    function updateApiCall(newParams){
        setCurrParams(newParams);
    }

    return {data, isLoading, updateApiCall};
}