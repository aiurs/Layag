window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
   const strip = document.getElementById('galleryStrip'),
         panels = document.querySelectorAll('.gallery-panel'),
         prev = document.getElementById('prevBtn'),
         next = document.getElementById('nextBtn');
   let i = 2;
   function update() {
       panels.forEach(p => p.classList.remove('active-slide'));
       panels[i].classList.add('active-slide');
       strip.style.transform = `translateX(${window.innerWidth / 2 - panels[i].offsetWidth / 2 - panels[i].offsetLeft}px)`;
   }
   prev.onclick = () => i > 0 && (i--, update());
   next.onclick = () => i < panels.length - 1 && (i++, update());
   window.onresize = update;
   setTimeout(update, 100);
});

const subscribeBtn = document.getElementById("subscribeBtn");
if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
        alert("Thank you for subscribing!");
    });
}


const tour = document.getElementById("tour");
const date = document.getElementById("date");
const groupA = ["May 8-10", "May 15-17", "May 22-24", "May 29-30"];
const groupB = ["May 7-10", "May 14-17", "May 21-24", "May 28-30"];
const schedules = {
    siquijor: groupA, launion: groupA, boracay: groupA, coron: groupA, camiguin: groupA, bohol: groupA,
    siargao: groupB, cebu: groupB, elnido: groupB
};
tour.addEventListener("change", function () {
    const selected = this.value;               
    date.innerHTML = '<option value="" disabled selected>Select Date</option>';
    if (schedules[selected]) {
        schedules[selected].forEach(d => {
            const option = document.createElement("option");
            option.textContent = d;
            option.value = d;
            date.appendChild(option);
        });
    }
});

const countInput = document.getElementById("companion-count");
const container = document.getElementById("companion-fields");
countInput.addEventListener("input", function () {
    const count = parseInt(this.value);
    container.innerHTML = "";
    if (!count || count < 1) return;
        const group = document.createElement("div");
        group.innerHTML = `
            <label><b>Full Name/s </b></label>
            <br>
            <input type="text" name="companion_name" required>
            <br>
            <label><b>Phone Number/s </b></label>
            <br>
            <input type="text" name="companion_number" required>
            <br>
        `;
        container.appendChild(group);
});

document.getElementById("payment-proof").addEventListener("change", function() {
    const file = this.files[0];
    if(file){
        const 
            preview = document.getElementById("preview");
            preview.src = URL.createObjectURL(file);
        }
});

function bookNow() {
    document.getElementById("popup").style.display="flex";
}
function closePopup() {
    document.getElementById("popup").style.display="none";
    document.getElementById("bookForm").reset();
    document.getElementById("preview").src="images/upload.png";
}





