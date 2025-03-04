import React from "react";
import "./styles.css";

// Bilder direkt importieren (Dateiendung .png beachten!)
import samsungQled from "./images/samsung-qled.png";
import ps5 from "./images/ps55.png";
import djiMini3Pro from "./images/dji-mini3pro.png";
import macbookPro from "./images/macbook-pro.png";
import iphone16Pro from "./images/iphone16-pro.png";
import appleWatch from "./images/apple-watch.png";

// Produktdaten mit importierten Bildern
const products = [
  {
    name: "Samsung QLED TV 65 Zoll",
    price: "CHF 999.– statt 1'499.–",
    image: samsungQled,
  },
  {
    name: "PlayStation 5",
    price: "CHF 499.– statt 599.–",
    image: ps5,
  },
  {
    name: "DJI Mini 3 Pro",
    price: "CHF 799.– statt 999.–",
    image: djiMini3Pro,
  },
  {
    name: "MacBook Pro 16 Zoll",
    price: "CHF 2'499.– statt 2'999.–",
    image: macbookPro,
  },
  {
    name: "iPhone 16 Pro Max 256 GB",
    price: "CHF 1'499.– statt 1'699.–",
    image: iphone16Pro,
  },
  {
    name: "Apple Watch Ultra 2",
    price: "CHF 799.– statt 899.–",
    image: appleWatch,
  },
];

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h2>TechCom Benefits</h2>
      <p>Exklusive Angebote für unsere treuen Kunden</p>

      <div className="grid-container">
        {products.map((product, index) => (
          <div className="card benefit-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="link-btn">Zum Angebot</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
