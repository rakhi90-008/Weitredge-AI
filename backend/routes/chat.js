
const express=require("express");
const router=express.Router();

const db=require("../db");
const askLLM=require("../llm");

router.post("/",(req,res)=>{

const {sessionId,message}=req.body;

if(!sessionId || !message){

return res.status(400).json({
error:"Missing sessionId or message"
});

}

db.run(`INSERT OR IGNORE INTO sessions(id) VALUES(?)`,
[sessionId]);

db.run(
`INSERT INTO messages(session_id,role,content)
VALUES(?,?,?)`,
[sessionId,"user",message]
);

db.all(`SELECT role,content FROM messages
WHERE session_id=?
ORDER BY id DESC LIMIT 10`,

[sessionId],

async(err,rows)=>{

if(err){

return res.status(500).json({error:"DB error"});

}

const ai=await askLLM("",message);

db.run(`INSERT INTO messages(session_id,role,content)
VALUES(?,?,?)`,
[sessionId,"assistant",ai.reply]);

res.json(ai);

});

});

module.exports=router;
