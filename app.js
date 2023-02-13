const navToggleBtn = document.querySelector('.navbar-toggler');
const navCollapseDiv = document.querySelector('.navbar-collapse');


navToggleBtn.addEventListener('click', () => {
    navCollapseDiv.classList.toggle('showNavbar');
    navToggleBtn.classList.toggle('showNavbar-toggler');
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
let displyContactUsFormElm = document.getElementById("displyContactUsForm");
let homePage = document.getElementById("homePage");


function displyContactUsFormFunction() {
    displyContactUsFormElm.style.display = "block";
    homePage.style.display = "none";
}
const nameElm = document.getElementById("name");
const emailElm = document.getElementById("email");
const messageElm = document.getElementById("textArea");

function onclickSubmitForm() {
    const name = nameElm.value;
    const email = emailElm.value;
    const message = messageElm.value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "psychoartgifts@gmail.com",
        Password: "Psycho@999",
        To: "rameshmarrthi999@gmail.com",
        From: emailElm.value,
        Subject: "New User",
        Body: "Add this body"
    }).then(
        message => alert(message));
    nameElm.value = ""
    emailElm.value = ""
    messageElm.value = ""
}
