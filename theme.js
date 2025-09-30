// Theme toggle with localStorage
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.setAttribute("data-theme", "dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    body.removeAttribute("data-theme");
    if (themeToggle) themeToggle.textContent = "🌙";
  }
}

// Set initial theme on page load
setInitialTheme();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
      body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    } else {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    }
  });
}
