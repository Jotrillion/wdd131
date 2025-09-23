const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");
const li = document.createElement("li");
const deleteBtn = document.createElement("button");


button.addEventListener("click", function () {
    if (input.value.trim() !== '') {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        li.textContent = input.value;
        deleteBtn.textContent = "❌";
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = '';
        input.focus();
        deleteBtn.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });
    }
});




