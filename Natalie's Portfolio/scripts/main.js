// Theme Toggle with localStorage
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// Toggle project details
function toggleProject(card) {
  const details = card.querySelector("p");
  if (details) {
    details.classList.toggle("hidden");
  }
}

// Form validation
const form = document.getElementById("form");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^\S+@\S+\.\S+$/;

  if (name === "" || email === "" || !emailPattern.test(email)) {
    feedback.textContent = "Please fill in all required fields and enter a valid email.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
    feedback.style.color = "green";
    form.reset();
  }
});