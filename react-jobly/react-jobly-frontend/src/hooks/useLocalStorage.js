import {useState, useEffect} from "react";

export function useLocalStorage(key){
    const [item, setItem] = useState(localStorage.getItem(key));

    useEffect(function setKey(){
        if(item === null){
            localStorage.removeItem(key)
        }
        else{
            localStorage.setItem(key, item);
        }
        console.log(localStorage);
    }, [item])

    return [item, setItem]
}