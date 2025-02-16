import React, { useState } from "react";
import "../styles.css"; // Falls du dort das FAQ-Styling hast

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: "Welche Internetgeschwindigkeiten bietet TechCom?", answer: "TechCom bietet Glasfaser-Internet mit Geschwindigkeiten von 100 Mbit/s bis 10 Gbit/s." },
        { question: "Wie lange dauert die Aktivierung meines Internet-Abos?", answer: "Die Aktivierung dauert in der Regel 2–5 Werktage, abhängig von der Adresse." },
        { question: "Gibt es eine Mindestlaufzeit für die Abos?", answer: "Ja, unsere Internet-Abos haben eine Mindestlaufzeit von 12 Monaten." },
        { question: "Kann ich mein Abo jederzeit upgraden oder downgraden?", answer: "Ja, ein Upgrade ist jederzeit möglich. Ein Downgrade kann nach Ablauf der Mindestlaufzeit erfolgen." }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2>Häufige Fragen</h2>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div className={`faq-item ${activeIndex === index ? "active" : ""}`} key={index}>
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question} <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
                        </button>
                        {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
