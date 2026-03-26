// getElementById example
const header = document.getElementById("main-header");
console.log(header);
// ===== MY PRACTICE =====

// 1. Select h1
const h1 = document.querySelector("h1");
console.log("H1:", h1);

// 2. Select all content
const contents = document.getElementsByClassName("content");
console.log("Contents:", contents);

// 3. Select form
const form = document.getElementById("contact-form");
console.log("Form:", form);

document.addEventListener("DOMContentLoaded", function () {
   // Select email input
const email = document.getElementById("email");

email.classList.toggle("active");


email.setAttribute("data-test", "email-field");

// Remove it
email.removeAttribute("data-test");

  // Parent
  console.log("Parent:", email.parentElement);

  // Grandparent
  console.log("Grandparent:", email.parentElement.parentElement);

  // Children of form
  const form = document.getElementById("contact-form");
  console.log("Children:", form.children);

  // First child
  console.log("First child:", form.firstElementChild);

  // Last child
  console.log("Last child:", form.lastElementChild);

});
document.addEventListener("DOMContentLoaded", function () {
   // your code here
});
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
