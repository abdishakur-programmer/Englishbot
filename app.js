const tg = window.Telegram.WebApp;
tg.expand();

const params = new URLSearchParams(window.location.search);
const level = params.get("level") || "beginner";
const date = params.get("date") || new Date().toISOString().slice(0, 10);

document.getElementById("meta").innerText = `Level: ${level} | Date: ${date}`;

document.getElementById("submitBtn").addEventListener("click", () => {
    const final_text = document.getElementById("finalText").value.trim();

    // You can also include quiz/fill answers in "answers"
    const payload = {
        level,
        date,
        final_text,
        answers: {
            quiz: {},
            fill: {}
        }
    };

    tg.sendData(JSON.stringify(payload));
    tg.close();
});