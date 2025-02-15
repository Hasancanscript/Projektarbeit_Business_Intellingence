import React from "react";

function ProduktePage() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/produkte">Internet</a></li>
            <li><a href="/tv">TV</a></li>
            <li><button className="link-button">Mobil</button></li>
            <li><button className="link-button">Support</button></li>
            <li><button className="link-button">Anmelden</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Unsere leistungsstarken & nachhaltigen Internet-Abos</h1>
          <p>TechCom bietet Ihnen die schnellste und zuverlässigste Internetverbindung in der Schweiz.</p>
          <p>Perfekt für Streaming, Gaming, Homeoffice und vieles mehr.</p>
          <p><strong>🌿 Klimaneutrales Internet:</strong> Wir setzen auf erneuerbare Energien und gleichen CO₂-Emissionen aus.</p>
          <p className="promo">🎁 <strong>Jetzt alle Abos mit kostenloser Montage – sparen Sie 249 CHF!</strong></p>
        </section>

        <section className="products">
          {[ 
            { title: "🏠 TechCom Fiber S", speed: "Bis zu 100 Mbit/s Download & Upload", router: "Gratis WLAN-Router mit Wi-Fi 6", price: "39.90 CHF/Monat", oldPrice: "64.90 CHF" },
            { title: "🔥 TechCom Fiber M", speed: "Bis zu 1 Gbit/s Download & Upload", router: "Gratis High-Speed WLAN-Router", price: "49.90 CHF/Monat", oldPrice: "79.90 CHF" },
            { title: "🚀 TechCom Fiber L", speed: "Bis zu 10 Gbit/s Download & Upload", router: "Gratis Router mit Wi-Fi 7", price: "59.90 CHF/Monat", oldPrice: "89.90 CHF" }
          ].map((product, index) => (
            <div className="product" key={index}>
              <h3>{product.title}</h3>
              <p><strong>Internet:</strong> {product.speed}</p>
              <p><strong>Router:</strong> {product.router}</p>
              <p className="price"><del>{product.oldPrice}</del> <strong>{product.price}</strong></p>
              <p className="montage"><del>Techniker-Montage: 249 CHF</del> ✅ Jetzt kostenlos!</p>
              <button className="subscribe-btn">Abo wählen</button>
            </div>
          ))}
        </section>

        <section className="faq-section">
          <h2>Häufige Fragen</h2>
          <div className="faq-container">
            {[ 
              { question: "Welche Internetgeschwindigkeiten bietet TechCom?", answer: "TechCom bietet Glasfaser-Internet mit Geschwindigkeiten von 100 Mbit/s bis 10 Gbit/s." },
              { question: "Wie lange dauert die Aktivierung meines Internet-Abos?", answer: "Die Aktivierung dauert in der Regel 2–5 Werktage, abhängig von der Adresse." },
              { question: "Gibt es eine Mindestlaufzeit für die Abos?", answer: "Ja, unsere Internet-Abos haben eine Mindestlaufzeit von 12 Monaten." },
              { question: "Kann ich mein Abo jederzeit upgraden oder downgraden?", answer: "Ja, ein Upgrade ist jederzeit möglich. Ein Downgrade kann nach Ablauf der Mindestlaufzeit erfolgen." }
            ].map((faq, index) => (
              <div className="faq-item" key={index}>
                <button className="faq-question">{faq.question}</button>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default ProduktePage;
