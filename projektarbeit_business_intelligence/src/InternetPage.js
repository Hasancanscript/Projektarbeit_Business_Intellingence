import React, { useState } from "react";
import "./styles.css"; // Stelle sicher, dass die Styles geladen werden

function InternetPage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div>
      {/* Navigation */}
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/internet">Internet</a></li>
            <li><a href="/tv">TV</a></li>
            <li><a href="#">Mobil</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Anmelden</a></li>
          </ul>
        </nav>
      </header>

      {/* Hauptbereich */}
      <main>
        <section className="hero">
          <h1>Die besten Internet-Abos der Schweiz</h1>
          <p>Surfen Sie im größten Glasfasernetz der Schweiz und profitieren Sie von gratis Router, Surf-Schutz und vielem mehr.</p>
          <p className="promo">🎁 <strong>Alle Internet- und TV-Abos 1 Jahr nur 59.90 CHF/Monat.</strong></p>
          <div className="address-check">
            <input type="text" id="address" placeholder="Strasse, Ort oder PLZ eingeben" />
            <button className="check-availability">Jetzt prüfen</button>
          </div>
        </section>

        <section className="products">
          {[ 
            { title: "🏠 TechCom Connect S", speed: "Bis zu 100 Mbit/s Download & Upload", router: "Gratis WLAN-Router mit Wi-Fi 6", price: "39.90 CHF/Monat", oldPrice: "64.90 CHF" },
            { title: "🔥 TechCom Connect M", speed: "Bis zu 1 Gbit/s Download & Upload", router: "Gratis High-Speed WLAN-Router", price: "49.90 CHF/Monat", oldPrice: "79.90 CHF" },
            { title: "🚀 TechCom Connect L", speed: "Bis zu 10 Gbit/s Download & Upload", router: "Gratis Router mit Wi-Fi 7", price: "59.90 CHF/Monat", oldPrice: "89.90 CHF" }
          ].map((product, index) => (
            <div className="product" key={index}>
              <h3>{product.title}</h3>
              <p><strong>Internet:</strong> {product.speed}</p>
              <p><strong>Router:</strong> {product.router}</p>
              <p className="price"><del>{product.oldPrice}</del> <strong>{product.price}</strong></p>
              <p className="montage"><del>Techniker-Montage: 249 CHF</del> ✅ Jetzt kostenlos!</p>
              <button className="details-link">➝ Abo-Details</button>
              <button className="subscribe-btn">Abo wählen</button>
            </div>
          ))}
        </section>

        {/* Häufige Fragen (FAQ) mit modernem Design */}
        <section className="faq">
          <h2>Häufige Fragen</h2>
          <div className="faq-container">
            {[
              { question: "Welche Internet-Abos bietet TechCom?", answer: "TechCom bietet verschiedene Internet-Abos mit Geschwindigkeiten von 100 Mbit/s bis 10 Gbit/s." },
              { question: "Welche Internetgeschwindigkeit benötige ich?", answer: "Das hängt von Ihrem Bedarf ab. Für normales Surfen reicht 100 Mbit/s, für Streaming und Gaming empfehlen wir 1 Gbit/s oder mehr." },
              { question: "Wie lange dauert die Aktivierung meines Internet-Abos?", answer: "Die Aktivierung dauert in der Regel 2–5 Werktage, abhängig von der Adresse." },
              { question: "Gibt es eine Mindestlaufzeit für die Abos?", answer: "Ja, unsere Internet-Abos haben eine Mindestlaufzeit von 12 Monaten." },
              { question: "Kann ich mein Abo jederzeit upgraden oder downgraden?", answer: "Ja, ein Upgrade ist jederzeit möglich. Ein Downgrade kann nach Ablauf der Mindestlaufzeit erfolgen." }
            ].map((item, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleQuestion(index)}>
                  {item.question}
                  <span className="faq-icon">{openQuestion === index ? "−" : "+"}</span>
                </button>
                {openQuestion === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default InternetPage;
