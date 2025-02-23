require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// 📌 Funktion zur Generierung fixer Preisverläufe über 10 Tage
function generateFixedPriceHistory() {
    let priceHistory = [];
    let basePrices = { TechCom: 50.00, Swisscom: 65.00 };

    for (let i = 0; i < 10; i++) {
        let day = new Date();
        day.setDate(day.getDate() - (9 - i));

        let TechCom = Math.min(Math.max(basePrices.TechCom + (Math.random() * 30 - 15), 35), 85);
        let Swisscom = Math.min(Math.max(basePrices.Swisscom + (Math.random() * 30 - 15), 35), 85);

        // Erhöhte Wahrscheinlichkeit, dass sich Preise überschneiden
        if (Math.random() < 0.25) {
            [TechCom, Swisscom] = [Swisscom, TechCom];
        }

        priceHistory.push({
            date: day.toISOString().split("T")[0],
            prices: { TechCom: parseFloat(TechCom.toFixed(2)), Swisscom: parseFloat(Swisscom.toFixed(2)) }
        });
    }
    return priceHistory;
}

let priceData = generateFixedPriceHistory(); // Preise bleiben fix nach Generierung

// 📌 API-Route für die letzten 10 Tage
app.get("/api/price-history", (req, res) => {
    res.json(priceData);
});

// 📌 WebSocket für Echtzeit-Preise (aber nur initiale Daten senden, keine Updates)
io.on("connection", (socket) => {
    console.log("⚡ Ein Client ist verbunden");
    socket.emit("priceUpdate", priceData); // Nur beim Verbindungsaufbau senden
});

// 📌 Server starten
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`🚀 Backend läuft auf Port ${PORT}`));
