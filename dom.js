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


// Select email input
const email = document.querySelector('input[type="email"]');
console.log(email);

// ===== DOM TRAVERSAL PRACTICE =====
const list = document.getElementById("todo-list");

const parent = list.parentElement;
console.log("Parent:", parent)