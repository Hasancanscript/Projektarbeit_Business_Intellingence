import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

// ✅ Stelle sicher, dass die Dateiendungen stimmen (z. B. .png statt .jpg falls nötig)
import team1 from "./images/team1.png"; 
import team2 from "./images/team2.png";
import team3 from "./images/team3.png";
import team4 from "./images/team4.png";
import team5 from "./images/team5.png";

function AboutPage() {
  const teamMembers = [
    { name: "Hasan Balci", role: "Frontend-Entwickler | Senior Software Engineer", diploma: "Dipl. Wirtschaftsinformatiker HF", image: team1 },
    { name: "Marcel Spahr", role: "Webdesigner | Senior Product Owner", diploma: "Dipl. Wirtschaftsinformatiker HF", image: team2 },
    { name: "Frédéric Hofer", role: "Senior Projektleiter | Major Incident Manager", diploma: "Dipl. Wirtschaftsinformatiker HF", image: team3 },
    { name: "Simon Gemetti", role: "Backend-Entwickler | Senior Systems Engineer", diploma: "Dipl. Wirtschaftsinformatiker HF", image: team4 },
    { name: "Pascal Aebischer", role: "Systems Engineer | Microsoft Certified Trainer", diploma: "Dipl. Wirtschaftsinformatiker HF", image: team5 },
  ];

  return (
    <div className="about-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internet">Internet</Link></li>
            <li><Link to="/tv">TV</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/about">Über uns</Link></li>
            <li><Link to="/login">Anmelden</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="about-intro">
          <h1>🌍 Über uns</h1>
          <p>
            TechCom wurde von fünf engagierten Fachkräften gegründet, die ihre Expertise in den Bereichen 
            Softwareentwicklung, IT-Infrastruktur und Business Intelligence vereinen. Unsere Mission ist es, 
            innovative und effiziente IT- und Telekommunikationslösungen zu entwickeln, die unseren Kunden 
            echten Mehrwert bieten.
          </p>
          <p>
            Unsere Spezialgebiete umfassen Frontend- und Backend-Entwicklung, System Engineering, IT-Support, 
            Webdesign und Produktmanagement. Mit unserer Erfahrung und unserem Know-how setzen wir neue Massstäbe 
            in der digitalen Welt.
          </p>
        </section>

        {/* Team Mitglieder */}
        <section className="team-section">
          <h2>👨‍💻 Unser Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.image} alt={member.name} className="team-image" />
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-diploma">{member.diploma}</p>
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

export default AboutPage;
