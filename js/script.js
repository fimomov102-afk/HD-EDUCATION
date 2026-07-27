const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

// Mobil menyu
menuBtn.onclick = () => {

    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");

};

// ===== CONTACT MODAL =====

const modal = document.getElementById("contactModal");
const heroBtn = document.getElementById("contactBtn");
const navBtn = document.getElementById("navContactBtn");
const closeBtn = document.querySelector(".close");

function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}

heroBtn.addEventListener("click", openModal);
navBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// Menyudagi link bosilganda menyu yopiladi
document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        overlay.classList.remove("active");

    });

});
// Overlay bosilganda menyu yopiladi
overlay.onclick = () => {

    navMenu.classList.remove("active");
    overlay.classList.remove("active");

};