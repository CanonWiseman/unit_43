import {useState, useEffect} from "react";
import JoblyApi from "../api";

export function useFetch(initialValue, apiCall, params=""){
    const [data, setData] = useState(initialValue);
    const [apiFunc] = useState(apiCall);
    const [currParams, setCurrParams] = useState(params);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function makeCall(){
            const res = await JoblyApi[apiFunc](currParams);
            setData(res);
            setLoading(false);
        }
        makeCall();

        return setLoading(true);
    }, [currParams]);

    function updateApiCall(newParams){
        setCurrParams(newParams);
    }

    return {data, loading, updateApiCall};
}