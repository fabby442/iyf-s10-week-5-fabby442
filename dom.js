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
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submission prevented");
});
  // First child
  console.log("First child:", form.firstElementChild);

  // Last child
  console.log("Last child:", form.lastElementChild);

});
document.addEventListener("DOMContentLoaded", function () {
   // your code here
});
const input = document.getElementById("email");

input.addEventListener("focus", () => {
  console.log("Input focused");
});

input.addEventListener("blur", () => {
  console.log("Input lost focus");
});
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";

document.body.appendChild(newParagraph);

// Remove after 3 seconds
setTimeout(() => {
  newParagraph.remove();
}, 3000);
for (let i = 1; i <= 3; i++) {
  const p = document.createElement("p");
  p.textContent = "Paragraph " + i;
  document.body.appendChild(p);
}
const original = document.createElement("p");
original.textContent = "Original paragraph";

document.body.appendChild(original);

const clone = original.cloneNode(true);
clone.textContent = "Cloned paragraph";

document.body.appendChild(clone);