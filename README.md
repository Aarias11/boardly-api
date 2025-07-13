# 🗂️ Boardly API

Boardly is a RESTful API for a task and project management system — built with **Node.js**, **Express**, **MongoDB**, and **JWT authentication**. 
It powers the backend for a Notion/Trello-like application with features like boards, tasks, user auth, and more.

---

## 🚀 Features

- 🔐 User authentication with JWT
- 🧑‍💼 Users can create and manage:
  - Boards (projects)
  - Tasks (with status, description, timestamps)
- 🗃️ MongoDB models with Mongoose
- 🧱 Modular controller/routes architecture
- 🌍 Fully RESTful endpoints
- 🧪 Easy to test with Postman
- 📦 Clean error handling middleware

---

## 📁 Project Structure
boardly-api/
│
├── src/
│   ├── config/          # DB connection setup
│   ├── controllers/     # Route logic (board, task, auth)
│   ├── middleware/      # Auth, error handling
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express routers
│   └── server.js        # Entry point
├── .env                 # Environment variables
├── .gitignore
└── README.md

---

