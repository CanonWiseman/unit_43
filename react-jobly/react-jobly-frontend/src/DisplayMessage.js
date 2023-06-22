import {v4 as uuid} from "uuid";
import "./DisplayMessages.css";

export function DisplayMessage({color, messages}){
    if(messages.length===0){
        return null;
    }
    return (
            <div className="DisplayMessages" style={{backgroundColor: color}}>
                {messages.map( err => (
                <p key={uuid()}>{err.split('instance.').join(' ')}</p>
            ))}
            </div>  
    )
}