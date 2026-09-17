// ===========================
// Profile Data
// ===========================
const profiles = {
    yance: {
        name: "Yance Lean B. Pastoral",
        age: 19,
        school: "Polytechnic University of the Philippines (PUP)",
        course: "Bachelor of Science in Information Technology",
        image: "profile1.jpg",
        background: "Yance is a 19-year-old Information Technology student at PUP with a strong passion for technology, software design, and web development. He brings a solid academic background and a keen eye for creating meaningful digital experiences."
    },
    sofia: {
        name: "Sofia Nathalie D. Aguilar",
        age: 19,
        school: "Polytechnic University of the Philippines (PUP)",
        course: "Bachelor of Secondary Education Major in English",
        image: "profile2.jpg",
        background: "Sofia is a 19-year-old Education student at PUP, majoring in English. She excels in literature and communication, bringing both academic excellence and a genuine love for language and teaching into everything she does."
    }
};

// ===========================
// Modal Elements
// ===========================
const aboutModal  = document.getElementById("aboutModal");
const detailModal = document.getElementById("detailModal");
const aboutBtn    = document.getElementById("aboutBtn");
const detailContent = document.getElementById("detailContent");

// ===========================
// Navbar "About Us" link
// ===========================
aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openAboutModal();
});

// ===========================
// About Modal
// ===========================
function openAboutModal() {
    aboutModal.classList.remove("closing");
    aboutModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeAboutModal() {
    aboutModal.classList.add("closing");
    setTimeout(() => {
        aboutModal.classList.remove("active", "closing");
        document.body.style.overflow = "";
    }, 380);
}

// ===========================
// Detail Modal
// ===========================
function openDetailModal(person) {
    const data = profiles[person];

    detailContent.innerHTML = `
        <img src="${data.image}" alt="${data.name}" class="detail-img">
        <h2>${data.name}</h2>
        <span class="detail-course-tag">${data.course}</span>
        <div class="info-group">
            <div class="info-item">
                <span class="info-label">Age</span>
                <span class="info-value">${data.age} years old</span>
            </div>
            <div class="info-item">
                <span class="info-label">University</span>
                <span class="info-value">${data.school}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Program</span>
                <span class="info-value">${data.course}</span>
            </div>
            <div class="info-item">
                <span class="info-label">About</span>
                <span class="info-value">${data.background}</span>
            </div>
        </div>
    `;

    detailModal.classList.remove("closing");
    detailModal.classList.add("active");
}

function closeDetailModal() {
    detailModal.classList.add("closing");
    setTimeout(() => {
        detailModal.classList.remove("active", "closing");
    }, 380);
}

// ===========================
// Close on backdrop click
// ===========================
[aboutModal, detailModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            if (modal === aboutModal) closeAboutModal();
            else closeDetailModal();
        }
    });
});

// ===========================
// Close on Escape key
// ===========================
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (detailModal.classList.contains("active")) closeDetailModal();
        else if (aboutModal.classList.contains("active")) closeAboutModal();
    }
});

// ===========================
// Navbar scroll effect
// ===========================
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.style.background = "rgba(15, 15, 26, 0.97)";
    } else {
        navbar.style.background = "rgba(15, 15, 26, 0.85)";
    }
});
