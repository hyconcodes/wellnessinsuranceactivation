const activateButton = document.querySelector("#activate-button");
const confirmation = document.querySelector("#confirmation");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

if (activateButton && confirmation) {
  activateButton.addEventListener("click", () => {
    activateButton.disabled = true;
    activateButton.classList.add("is-loading");
    activateButton.setAttribute("aria-busy", "true");
    activateButton.querySelector(".button-label").textContent = "Request Submitted";
    activateButton.querySelector(".button-arrow").textContent = "";

    window.setTimeout(() => {
      confirmation.hidden = false;
      activateButton.classList.remove("is-loading");
      activateButton.querySelector(".button-arrow").textContent = "✓";
      activateButton.setAttribute("aria-busy", "false");
      activateButton.setAttribute("aria-expanded", "true");
      confirmation.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 3000);
  });
}
