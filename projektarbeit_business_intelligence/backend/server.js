require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// 📌 Test-Route
app.get("/", (req, res) => {
    res.send("🚀 Backend läuft erfolgreich!");
});

// 📌 Swisscom Preise simuliert abrufen
app.get("/api/swisscom-prices", async (req, res) => {
    try {
        const swisscomData = [
            { name: "Swisscom Internet S", speed: "50 Mbit/s", price: "49.90 CHF" },
            { name: "Swisscom Internet M", speed: "1 Gbit/s", price: "79.90 CHF" },
            { name: "Swisscom Internet L", speed: "10 Gbit/s", price: "99.90 CHF" }
        ];
        res.json(swisscomData);
    } catch (error) {
        res.status(500).json({ error: "Fehler beim Abrufen der Swisscom-Daten" });
    }
});

// 📌 WebSocket für Echtzeit-Preise
io.on("connection", (socket) => {
    console.log("⚡ Ein Client ist verbunden");

    setInterval(async () => {
        const prices = [
            { name: "TechCom Internet S", price: "39.90 CHF" },
            { name: "TechCom Internet M", price: "49.90 CHF" },
            { name: "TechCom Internet L", price: "59.90 CHF" }
        ];
        socket.emit("priceUpdate", prices);
    }, 10000);
});

// 📌 Server starten
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`🚀 Backend läuft auf Port ${PORT}`));
