import React from "react";

function TvPage() {
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
          <h1>📺 Erleben Sie Fernsehen in bester Qualität</h1>
          <p>Mit TechCom TV geniessen Sie über 330 Sender, UHD-Qualität, zeitversetztes Fernsehen und flexible Zusatzoptionen.</p>
          <p>🆓 <strong>Jetzt 6 Monate Premium TV kostenlos testen!</strong></p>
        </section>

        <section className="products">
          {[ 
            { title: "📡 TechCom TV S", channels: "200+ Sender inkl. HD", recordings: "100h", price: "19.90 CHF/Monat", oldPrice: "24.90 CHF" },
            { title: "📺 TechCom TV M", channels: "290+ Sender inkl. UHD", recordings: "250h", price: "29.90 CHF/Monat", oldPrice: "34.90 CHF" },
            { title: "📽️ TechCom TV L", channels: "330+ Sender inkl. UHD", recordings: "2000h", price: "39.90 CHF/Monat", oldPrice: "49.90 CHF" }
          ].map((product, index) => (
            <div className="product" key={index}>
              <h3>{product.title}</h3>
              <p><strong>Sender:</strong> {product.channels}</p>
              <p><strong>Aufnahmen:</strong> {product.recordings}</p>
              <p className="price"><del>{product.oldPrice}</del> <strong>{product.price}</strong></p>
              <button className="subscribe-btn">Abo wählen</button>
            </div>
          ))}
        </section>

        <section className="streaming-section">
          <h2>🎬 Streaming & Zusatzpakete</h2>
          <p>Erweitern Sie Ihr TV-Erlebnis mit den besten Streaming-Partnern.</p>
          <button className="streaming-button">➝ Zu den Streaming-Angeboten</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default TvPage;
