# 🚀 Task4Prodigy

**Task4Prodigy** is a Backend Node.js project integrated with **MongoDB** and **Redis**, designed for real-time applications with fast and scalable backend services. This project demonstrates database management, caching, and RESTful APIs in action.

---

## 🌟 Features

- ✅ Node.js & Express backend  
- ✅ MongoDB integration for reliable data storage  
- ✅ Redis caching for high-performance data retrieval  
- ✅ RESTful APIs ready for client-server communication  
- ✅ Easy to set up and deploy  

---

## 🛠 Tech Stack

| Layer          | Technology          |
|----------------|------------------|
| Backend        | Node.js, Express  |
| Database       | MongoDB           |
| Cache          | Redis             |
| Package Manager| npm               |

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) installed  
- [MongoDB](https://www.mongodb.com/) installed and running  
- [Redis](https://redis.io/) installed and running  

---

## ⚡ Installation
Install dependencies:

npm install


Start MongoDB server:
(Use your terminal/PowerShell)

mongod


Start Redis server:
Navigate to Redis folder and run:

cd C:\path\to\Redis-x64-3.0.504
.\redis-server.exe


Test Redis connection:

.\redis-cli.exe ping


Output should be:

PONG


Create a .env file in the root directory with the following content:

PORT=5000
MONGO_URI=<your-mongodb-connection-string>
REDIS_HOST=127.0.0.1
REDIS_PORT=6379


Start the server:

node server.js


Expected output:

🚀 Server running on http://localhost:5000
✅ Connected to Redis
✅ MongoDB connected

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/Deepikasel/Task4Prodigy>

   📌 Project Structure
Task4Prodigy/
├─ server.js
├─ routes/userRoutes.js
├─ models/User.js
├─ redisClient.js


