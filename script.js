document.addEventListener("DOMContentLoaded", function () {
    // FAQ Funktionalität
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", function () {
            const isActive = item.classList.contains("active");

            // Schliesst alle anderen geöffneten FAQ-Abschnitte
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq-answer").style.display = "none";
                }
            });

            // Wechselt den aktiven Zustand
            if (isActive) {
                answer.style.display = "none";
                item.classList.remove("active");
            } else {
                answer.style.display = "block";
                item.classList.add("active");
            }
        });
    });
});
