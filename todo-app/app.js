document.addEventListener("DOMContentLoaded", function () {

    // SELECT ELEMENTS
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");
    const filters = document.querySelectorAll(".filter");
    const itemsLeft = document.getElementById("items-left");
    const clearBtn = document.getElementById("clear-completed");

    // ADD TASK
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const text = input.value.trim();
        if (text === "") return;

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = text;

        const btn = document.createElement("button");
        btn.textContent = "X";

        li.appendChild(span);
        li.appendChild(btn);
        list.appendChild(li);

        input.value = "";

        updateCount();
    });

    // CLICK EVENTS (TOGGLE + DELETE)
    list.addEventListener("click", function (e) {

        // DELETE
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }

        // TOGGLE COMPLETE
        if (e.target.tagName === "SPAN") {
            e.target.parentElement.classList.toggle("completed");
        }

        updateCount();
    });

    // FILTER TASKS
    filters.forEach(btn => {
        btn.addEventListener("click", function () {
            const type = this.dataset.filter;
            const tasks = list.children;

            for (let task of tasks) {
                if (type === "all") {
                    task.style.display = "block";
                } 
                else if (type === "active") {
                    task.style.display = task.classList.contains("completed") ? "none" : "block";
                } 
                else {
                    task.style.display = task.classList.contains("completed") ? "block" : "none";
                }
            }
        });
    });

    // COUNT ITEMS LEFT
    function updateCount() {
        const tasks = list.children;
        let count = 0;

        for (let task of tasks) {
            if (!task.classList.contains("completed")) {
                count++;
            }
        }

        itemsLeft.textContent = count + " items left";
    }

    // CLEAR COMPLETED
    clearBtn.addEventListener("click", function () {
        const tasks = list.children;

        for (let i = tasks.length - 1; i >= 0; i--) {
            if (tasks[i].classList.contains("completed")) {
                tasks[i].remove();
            }
        }

        updateCount();
    });

});