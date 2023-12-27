// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navBar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll behaviour

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      // active sections for animation on scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when clicked navbar links (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", function () {
  // Find the "Hire Me" button by its ID
  var hireMeBtn = document.getElementById("hireMeBtn");

  // Add a click event listener to the button
  hireMeBtn.addEventListener("click", function () {
    // Open the default email client with a pre-filled email
    window.location.href =
      "mailto:shantanusirohi.dev@gmail.com?subject=Job%20Opportunity&body=Hi%20there,%20I%20am%20interested%20in%20hiring%20you.%20Let's%20discuss%20further.";
  });
});

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br>  Email: ${email.value}<br>
    Mobile: ${mobile.value}<br>  
    Message: ${message.value}<br>`;

  Email.send({
    SecureToken: "d2bfc808-e37c-4e8e-b500-91125fb25a42",
    To: "shantanusirohi.dev@gmail.com",
    From: "shantanusirohi.dev@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully.",
        icon: "success",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
  form.reset();
  return false;
});
