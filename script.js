```javascript
/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   APPOINTMENT FORM
========================================= */

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("patientName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value.trim();


    if (!name || !phone || !department || !date || !time) {

        alert("Please fill all required fields.");

        return;

    }


    /*
       IMPORTANT:

       Change this number to hospital WhatsApp number.

       Example:
       const hospitalWhatsApp = "919876543210";
    */

    const hospitalWhatsApp = "919876543210";


    const whatsappMessage =
        `*New Appointment Request*%0A%0A` +

        `*Patient Name:* ${name}%0A` +

        `*Phone:* ${phone}%0A` +

        `*Email:* ${email || "Not provided"}%0A` +

        `*Department:* ${department}%0A` +

        `*Date:* ${date}%0A` +

        `*Time:* ${time}%0A` +

        `*Message:* ${message || "No message"}`;


    const whatsappURL =
        `https://wa.me/${hospitalWhatsApp}?text=${whatsappMessage}`;


    window.open(whatsappURL, "_blank");

});


/* =========================================
   DATE - PREVENT PAST DATES
========================================= */

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


/* =========================================
   BACK TO TOP
========================================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.style.display = "grid";

    } else {

        backTop.style.display = "none";

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   SIMPLE SCROLL ANIMATION
========================================= */

const animatedElements = document.querySelectorAll(
    ".service-card, .doctor-card, .testimonial-card, .why-item, .contact-card"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "all 0.6s ease";

    observer.observe(element);

});
```
