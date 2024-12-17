const header = document.querySelector("header")
const rows = document.querySelectorAll(".row");
const articles = document.querySelectorAll(".article")

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

rows.forEach(row => {
    row.addEventListener("click", () => {
        const link = row.getAttribute("data-link");
        window.location.href = link;
    });
});

articles.forEach(article => {
    article.addEventListener("click", () => {
        const link = article.getAttribute("data-link");
        window.location.href = link;
    });
});

let menu = document.querySelector('#menu-icon')
let navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navList.classList.remove('active')
}
