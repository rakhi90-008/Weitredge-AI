# 🧪 AI-Powered Support Assistant (Offline Version)

## 📌 Project Overview

This project is a full-stack AI-powered Support Assistant built using:

- **Frontend:** React.js
- **Backend:** Node.js (Express)
- **Database:** SQLite
- **AI Logic:** Offline document-based intelligent response system

The assistant answers user queries based strictly on the provided `docs.json` file.

If the answer is not found in the documentation, it responds appropriately.

This version works completely offline and does not require any API keys.

---

# 🚀 Features

## ✅ Chat Interface (React)
- Message input box
- Send button
- Chat message display (user + assistant)
- Session ID stored in localStorage
- Persistent conversation per session

## ✅ Backend (Node.js + Express)
- `POST /api/chat`
- `GET /api/conversations/:sessionId`
- `GET /api/sessions`
- Stores conversations in SQLite
- Maintains session-wise context

## ✅ Database (SQLite)

### Table: `sessions`

| Column      | Type     |
|------------|----------|
| id         | TEXT (PK)|
| created_at | DATETIME |
| updated_at | DATETIME |

### Table: `messages`

| Column      | Type     |
|------------|----------|
| id         | INTEGER (PK) |
| session_id | TEXT (FK) |
| role       | TEXT ("user" / "assistant") |
| content    | TEXT |
| created_at | DATETIME |

---

# 📂 Project Structure


project-root/
│
├── backend/
│ ├── server.js
│ ├── db.js
│ ├── llm.js
│ ├── docs.json
│ └── routes/
│ └── chat.js
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.js
│ │ ├── Chat.jsx
│ │ ├── api.js
│ │ └── index.js
│ └── package.json
│
└── README.md


---

# 🛠 Installation & Setup

## 1️⃣ Clone or Extract Project


Extract the ZIP file


---

## 2️⃣ Run Backend

Navigate to backend folder:

```bash
cd backend
npm install
node server.js

You should see:

Offline AI Backend running 5000
3️⃣ Run Frontend

Open a new terminal:

cd frontend
npm install
npm start

Open browser:

http://localhost:3000
 API Documentation
🔹 POST /api/chat
Request Body
{
  "sessionId": "abc123",
  "message": "How can I reset my password?"
}
Response
{
  "reply": "Users can reset password from Settings > Security.",
  "tokensUsed": 0
}
🔹 GET /api/conversations/:sessionId

Returns full conversation history for that session.

🔹 GET /api/sessions

Returns all session IDs with timestamps.
