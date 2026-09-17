// Data for Yance and Sofia
const profiles = {
    yance: {
        name: "Yance Lean B. Pastoral",
        age: 19,
        school: "Polytechnic University of the Philippines (PUP)",
        course: "Bachelor of Science in Information Technology (BSIT)",
        image: "profile1.jpg",
        background: "Si Yance ay isang 19-year old IT student sa PUP. May malaking interes sa technology, software design, at web development, at may magandang academic background."
    },
    sofia: {
        name: "Sofia Nathalie D. Aguilar",
        age: 19, // Pwede mong palitan ang age kung kinakailangan
        school: "Polytechnic University of the Philippines (PUP)",
        course: "Bachelor of Secondary Education Major in English (BSED-ENG)",
        image: "profile2.jpg",
        background: "Si Sofia (Pyang) ay nag-aaral sa PUP sa kursong Education Major in English. Mahusay sa larangan ng literatura at komunikasyon, at may impresibong academic record."
    }
};

// Modal Elements
const aboutModal = document.getElementById("aboutModal");
const detailModal = document.getElementById("detailModal");
const aboutBtn = document.getElementById("aboutBtn");
const detailContent = document.getElementById("detailContent");

// Open About Modal
aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openAboutModal();
});

function openAboutModal() {
    aboutModal.style.display = "flex";
}

function closeAboutModal() {
    aboutModal.style.display = "none";
}

// Open Specific Detail Modal
function openDetailModal(person) {
    const data = profiles[person];
    detailContent.innerHTML = `
        <img src="${data.image}" alt="${data.name}" class="detail-img">
        <h2>${data.name}</h2>
        <div class="info-group">
            <p><strong>Age:</strong> ${data.age} years old</p>
            <p><strong>School:</strong> ${data.school}</p>
            <p><strong>Course/Program:</strong> ${data.course}</p>
            <p><strong>Background:</strong> ${data.background}</p>
        </div>
    `;
    detailModal.style.display = "flex";
}

function closeDetailModal() {
    detailModal.style.display = "none";
}

// Close Modals when clicking outside
window.onclick = function(event) {
    if (event.target === aboutModal) {
        closeAboutModal();
    }
    if (event.target === detailModal) {
        closeDetailModal();
    }
};
