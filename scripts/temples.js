const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const now = new Date();
currentyear.innerHTML = ` <span class="highlight">${now.getFullYear()}</span>`;
lastModified.innerHTML = `Last Modification: <span class="light">${document.lastModified}</span>`;
const menuButton = document.getElementById('menu');
const navBar = document.querySelector('.nav-bar');
const heading = document.querySelector('.heading');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    navBar.classList.toggle('show');
    heading.classList.toggle('hide');
});
