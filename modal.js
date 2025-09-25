document.querySelectorAll(".project-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.getElementById("modalTitle").textContent = this.dataset.title;
        document.getElementById("modalImg").src = this.dataset.img;
        document.getElementById("modalDescription").textContent = this.dataset.description;
        document.getElementById("modalFrontend").textContent = this.dataset.frontend;
        document.getElementById("modalBackend").textContent = this.dataset.backend;
        document.getElementById("modalLink").href = this.dataset.link;

        document.getElementById("projectModal").style.display = "flex";
    });
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("projectModal").style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("projectModal")) {
        document.getElementById("projectModal").style.display = "none";
    }
});
