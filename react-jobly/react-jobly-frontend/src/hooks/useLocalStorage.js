import React from "react";

export function useLocalStorage(key="", action, value=""){
    if(action === "getItem"){
        return localStorage.getItem(key);
    }
    else{
        localStorage.setItem(key, value);
    }
    
}