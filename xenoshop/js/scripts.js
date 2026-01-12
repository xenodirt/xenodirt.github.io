document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (!form) return;

    const msg = document.createElement("p");
    msg.id = "form-message";

    form.appendChild(msg);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        msg.textContent = "Submission success!";
    });
});