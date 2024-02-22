const header = document.querySelector("header")

let contactMeForm = document.querySelector("#contact-me-form")
let nameInput;
let emailInput;
let messageInput;

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
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

contactMeForm.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()
    nameInput = document.querySelector("#name-input").value
    emailInput = document.querySelector("#email-input").value
    messageInput = document.querySelector("#message-input").value
    Email.send({
        SecureToken : "e2b0b23d-243c-41b7-8657-64fba421858d",
        To : 'arifreis2011@hotmail.com',
        From : emailInput,
        Subject : "Message from "+ nameInput,
        Body : messageInput
    }).then(
      message => alert(message)
    );
}

/*const articles = document.querySelectorAll(".article")

articles.forEach(function(article) {
    article.addEventListener('click', function() {
        let title = this.querySelector("h4 a").innerHTML
        let imageUrl = this.querySelector("img").getAttribute("src")
        let articleInfo = {articleTitle : title, articleImage : imageUrl}
        localStorage.setItem('articleInfo', JSON.stringify(articleInfo))
    })
})

if(document.title == "Detail Page") {
    let stringData = localStorage.getItem('articleInfo')
    let articleDetailInfo = JSON.parse(stringData)
    document.querySelector("img").src = articleDetailInfo.articleImage
    document.querySelector("h1").innerHTML = articleDetailInfo.articleTitle
}*/

/*const projectsContent = document.querySelector(".projects-content")
let http = new XMLHttpRequest();
http.open('get', 'projects.json', true);
http.send();
http.onload = function() {
    if(this.status == 200) {
        let projects = JSON.parse(this.responseText);
        let output = "";
        for(let project of projects) {
            output += `
                <div class="row">
                    <img src="${project.image_url}">
                    <div class="main-row">
                        <div class="row-text">
                            <h5>${project.type}</h5>
                        </div>
                        <div class="row-icon">
                            <i class="ri-github-fill"></i>
                        </div>
                    </div>
                    <h4>
                        <a href="${project.url}">${project.title}</a>
                    </h4>
                </div>
            `;
        }
        projectsContent.innerHTML = output
    }
}*/