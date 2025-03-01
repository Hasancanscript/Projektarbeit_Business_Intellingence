require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// 📌 Verbindung zur MongoDB-Datenbank
mongoose.connect("mongodb://127.0.0.1:27017/techcomDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB verbunden!"))
.catch(err => console.error("❌ MongoDB Fehler:", err));

// 📌 Benutzer-Schema erstellen
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model("User", UserSchema);

// 📌 Benutzer-Registrierung
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  
  const existingUser = await User.findOne({ username });
  if (existingUser) return res.status(400).json({ message: "Benutzername existiert bereits!" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "Benutzer erfolgreich registriert!" });
});

// 📌 Benutzer-Login
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) return res.status(400).json({ message: "Benutzer nicht gefunden!" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Falsches Passwort!" });

  const token = jwt.sign({ id: user._id }, "geheimesToken", { expiresIn: "1h" });
  res.json({ token });
});

// 📌 Route zum Abrufen des eingeloggten Benutzers
app.get("/api/user", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Kein Token!" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "geheimesToken");
    const user = await User.findById(decoded.id);
    res.json({ username: user.username });
  } catch (err) {
    res.status(401).json({ message: "Token ungültig!" });
  }
});

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

// 📌 API-Route für die letzten 10 Tage Preisverlauf
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
