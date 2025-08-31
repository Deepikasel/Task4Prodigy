const redis = require("redis");

// Connect to local Redis server
const client = redis.createClient({
  url: "redis://127.0.0.1:6379"
});

client.on("error", (err) => console.error("❌ Redis Error:", err));
client.on("connect", () => console.log("✅ Connected to Redis"));

client.connect();

module.exports = client;
