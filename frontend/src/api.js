
import {v4 as uuid} from "uuid";

export function getSession(){

let id=localStorage.getItem("session");

if(!id){

id=uuid();

localStorage.setItem("session",id);

}

return id;

}
