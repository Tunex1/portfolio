const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Menü öffnen" : "Menü schließen");
  mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menü öffnen");
    mainNav.classList.remove("is-open");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#project-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const values = new FormData(form);
  const subject = `Projektanfrage von ${values.get("name")}`;
  const body = [
    `Name: ${values.get("name")}`,
    `E-Mail: ${values.get("email")}`,
    "",
    "Projektbeschreibung:",
    values.get("project")
  ].join("\n");

  document.querySelector("#form-hint").textContent = "Dein E-Mail-Programm sollte sich jetzt öffnen. Du kannst die Nachricht dort noch prüfen und senden.";
  window.location.href = `mailto:naim.berisha@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
