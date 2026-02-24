
const express=require("express");
const cors=require("cors");

require("./db");

const chat=require("./routes/chat");

const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/chat",chat);

const db=require("./db");

app.get("/api/sessions",(req,res)=>{

db.all(`SELECT id,updated_at FROM sessions`,
(_,rows)=>res.json(rows));

});

app.get("/api/conversations/:id",(req,res)=>{

db.all(`SELECT role,content,created_at FROM messages
WHERE session_id=? ORDER BY id ASC`,
[req.params.id],
(_,rows)=>res.json(rows));

});

app.listen(5000,()=>{

console.log("Offline AI Backend running 5000");

});
