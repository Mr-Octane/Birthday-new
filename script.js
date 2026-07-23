// 🎉 CONFETTI
function createConfetti() {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;

    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

// 💖 HEARTS
function createHearts() {
  const heartsContainer = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }, 300);
}

// RUN
window.onload = () => {
  createConfetti();
  createHearts();
};
