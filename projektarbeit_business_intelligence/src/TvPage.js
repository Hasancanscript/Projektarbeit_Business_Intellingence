import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // ✅ Stelle sicher, dass styles.css im selben Ordner existiert

function TvPage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Welche TV-Abos bietet TechCom?",
      answer: "TechCom bietet flexible TV-Abos mit über 330 Sendern in HD/UHD, 7 Tage Replay, Aufnahmen und Streaming-Apps wie Netflix und Disney+."
    },
    {
      question: "Kann ich TechCom TV auf mehreren Geräten nutzen?",
      answer: "Ja! Unsere TV-Abos ermöglichen Streaming auf bis zu 5 Geräten gleichzeitig, einschliesslich Smart-TVs, Smartphones und Tablets."
    },
    {
      question: "Welche Zusatzpakete gibt es für TechCom TV?",
      answer: "Neben Standard-TV-Abos bieten wir Premium-Pakete wie Sky Sport, Netflix, Disney+ und spezielle Sender für Filme, Sport und internationale Inhalte."
    },
    {
      question: "Wie funktioniert 7 Tage Replay?",
      answer: "Mit 7 Tage Replay können Sie Sendungen bis zu einer Woche nach der Ausstrahlung jederzeit ansehen oder pausieren, vor- und zurückspulen."
    },
    {
      question: "Wie kann ich mein TechCom TV-Abo kündigen oder upgraden?",
      answer: "Sie können Ihr TV-Abo jederzeit online in Ihrem Kundenbereich verwalten, upgraden oder kündigen – ganz flexibel ohne lange Vertragslaufzeit."
    }
  ];

  const tvProducts = [
    {
      title: "📡 TechCom TV S",
      channels: "200+ Sender inkl. HD",
      replay: "7 Tage Replay",
      recordings: "100h Aufnahmen",
      devices: "2 zusätzliche mobile Geräte",
      extras: ["Kostenlose Mediathek"],
      price: "19.90 CHF/Monat",
      oldPrice: "24.90 CHF"
    },
    {
      title: "📺 TechCom TV M",
      channels: "290+ Sender inkl. UHD",
      replay: "7 Tage Replay mit Spulen",
      recordings: "250h Aufnahmen",
      devices: "3 zusätzliche mobile Geräte",
      extras: ["Kostenlose Mediathek"],
      price: "29.90 CHF/Monat",
      oldPrice: "34.90 CHF"
    },
    {
      title: "🎥 TechCom TV L",
      channels: "330+ Sender inkl. UHD",
      replay: "7 Tage Replay mit Spulen",
      recordings: "2000h Aufnahmen",
      devices: "5 zusätzliche mobile Geräte",
      extras: ["Kostenlose Mediathek", "Netflix & Disney+ buchbar"],
      price: "39.90 CHF/Monat",
      oldPrice: "49.90 CHF"
    }
  ];

  return (
    <div>
      {/* 🔹 Navigationsbereich */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internet">Internet</Link></li>
            <li><Link to="/tv">TV</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/preisvergleich">Preisvergleich</Link></li>
            <li><Link to="/about">Über uns</Link></li>
            <li><Link to="/about-techcom">Über TechCom</Link></li>
            <li><Link to="/login">Anmelden</Link></li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Hauptinhalt */}
      <main>
        <section className="hero">
          <h1>📺 Erleben Sie Fernsehen in bester Qualität</h1>
          <p>Mit TechCom TV geniessen Sie über 330 Sender, UHD-Qualität, zeitversetztes Fernsehen und flexible Zusatzoptionen.</p>
          <p>🆓 <strong>Jetzt 6 Monate Premium TV kostenlos testen!</strong></p>
        </section>

        <section className="tv-products">
          {tvProducts.map((product, index) => (
            <div className="tv-card" key={index}>
              <h3 className="tv-title">{product.title}</h3>
              <div className="tv-info">
                <p><strong>Sender</strong></p>
                <p>{product.channels}</p>
                
                <p><strong>Replay</strong></p>
                <p>{product.replay}</p>

                <p><strong>Aufnahmen</strong></p>
                <p>{product.recordings}</p>

                <p><strong>TV auf mehreren Geräten</strong></p>
                <p>{product.devices}</p>

                <p><strong>Zusatzinhalte</strong></p>
                <p>{product.extras.join(", ")}</p>
              </div>
              <p className="price">
                <del>{product.oldPrice}</del> <strong>{product.price}</strong>
              </p>
              <button className="subscribe-btn">Abo wählen</button>
            </div>
          ))}
        </section>

        {/* 🔹 Streaming-Partner-Bereich mit funktionierendem Button */}
        <section className="streaming-section">
          <h2> Streaming & Zusatzpakete</h2>
          <p>Erweitern Sie Ihr TV-Erlebnis mit den besten Streaming-Partnern.</p>
          <Link to="/streaming" className="streaming-button">
            ➝ Zu den Streaming-Angeboten
          </Link>
        </section>

        {/* 🔹 Häufige Fragen Sektion */}
        <section className="faq-section">
          <h2>❓ Häufige Fragen</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleQuestion(index)}>
                  {faq.question}
                  <span className="faq-icon">{openQuestion === index ? "▲" : "▼"}</span>
                </button>
                {openQuestion === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 🔹 Footer */}
      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default TvPage;
