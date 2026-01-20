function startSlideshow(slides, interval = 3500) {
    if (!slides || slides.length === 0) return;

    let index = 0;
    slides.forEach(s => s.classList.remove("active"));
    slides[0].classList.add("active");

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, interval);
}

document.addEventListener("DOMContentLoaded", () => {
    startSlideshow(document.querySelectorAll(".work-slide"), 3500);

    // Smooth scroll for navbar links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

    // Logo scroll to top
    document.querySelector(".logo-btn").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
// ================= AI CHATBOT =================

const chatbot = document.querySelector(".chatbot");
const toggleBtn = document.querySelector(".chatbot-toggle");
const closeBtn = document.querySelector(".chatbot-close");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

toggleBtn.onclick = () => chatbot.style.display = "flex";
closeBtn.onclick = () => chatbot.style.display = "none";

sendBtn.onclick = sendMessage;
chatInput.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;

    addMessage(msg, "user-message");
    chatInput.value = "";

    setTimeout(() => {
        addMessage(getBotReply(msg), "bot-message");
    }, 600);
}

function addMessage(text, className) {
    const div = document.createElement("div");
    div.className = className;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("skill"))
        return "Ashim is skilled in HTML, CSS, JavaScript, PHP, MySQL, VFX, Resolume Arena, and script writing.";

    if (message.includes("project") || message.includes("work"))
        return "Ashim has worked on portfolio websites, billing systems, trekking websites, and creative video projects.";

    if (message.includes("experience"))
        return "Ashim is a fresher and freelance developer with strong creative and technical skills.Want to know more about Ashim experience?";
 if (message.includes("yes"))
        return "Ashim is an Official Led engineer of 90's band 'Dmarch' Band. He has done +10 shows all over Nepal.Also worked with Lekali band,Vegabond band And Bro&sis band.";
    if (message.includes("cv"))
        return "You can download Ashim's CV from the CV section of this website.";
if (message.includes("name") || message.includes("information"))
    return "I am Ashim Gurung from Pokhara.I am software Engineer also vfx artist and Video editor.";
if (message.includes("vote"))
     return "Kp oli ba ma...saat surya saat chap, yemale is north";
    if (message.includes("hello") || message.includes("hi"))
        return "Hello 👋 How can I help you today?";

    return "I'm here to help. Try asking about skills, projects, experience, or CV.";
}
