
import axios from "axios";
import {useState} from "react";
import {getSession} from "./api";

export default function Chat(){

const [msg,setMsg]=useState("");
const [messages,setMessages]=useState([]);

const sessionId=getSession();

async function send(){

if(!msg) return;

const res=await axios.post(
"http://localhost:5000/api/chat",
{sessionId,message:msg}
);

setMessages([
...messages,
{role:"user",content:msg},
{role:"assistant",content:res.data.reply}
]);

setMsg("");

}

return(

<div style={{padding:20}}>

<h2>Offline AI Support Assistant</h2>

{messages.map((m,i)=>(

<div key={i}>
<b>{m.role}</b>: {m.content}
</div>

))}

<input value={msg}
onChange={e=>setMsg(e.target.value)}
placeholder="Ask question"/>

<button onClick={send}>Send</button>

</div>

);

}
