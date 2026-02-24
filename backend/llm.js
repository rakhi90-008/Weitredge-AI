const fs = require("fs");

const docs = JSON.parse(
fs.readFileSync(__dirname + "/docs.json")
);

async function askLLM(_, userMessage){

const question = userMessage.toLowerCase();

// -------- DOCUMENT ANSWERS --------

for(const d of docs){

const combined =
(d.title + " " + d.content).toLowerCase();

if(
question.includes("password") &&
combined.includes("password")
){

return {

reply :
"Sure 🙂. " + d.content,

tokensUsed:0

};

}

if(
question.includes("refund") &&
combined.includes("refund")
){

return {

reply :
"Here is the information you need 👍. "
+ d.content,

tokensUsed:0

};

}

}


// -------- AI STYLE GENERAL RESPONSES --------

if(question.includes("hello")
|| question.includes("hi")){

return {

reply :
"Hello 👋! I am your AI Support Assistant. How can I help you today?",

tokensUsed:0

};

}

if(question.includes("joke")){

return {

reply :
"Why did the computer show up at work late? Because it had a hard drive 😄.",

tokensUsed:0

};

}

if(question.includes("how are you")){

return {

reply :
"I'm doing great 🙂 and ready to help you!",

tokensUsed:0

};

}


// -------- DEFAULT AI STYLE --------

return {

reply :
"I’m here to help 🙂. Currently I can answer questions related to product support like passwords or refunds. Please ask something related to that.",

tokensUsed:0

};

}

module.exports = askLLM;