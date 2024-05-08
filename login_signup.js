let signup = document.getElementsByClassName("page2")[0];
let signup_btn = document.getElementsByClassName('signup-btn')[0];
let overlay = document.getElementsByClassName('overlay')[0];

signup_btn.addEventListener("click", () => {
    signup.style.display = "block";
    overlay.style.display = "block";
});


// -----------------------------------------------


let login_option = document.getElementsByClassName("page3")[0];
let login_btn = document.getElementsByClassName('login_btn')[0];
let overlay2 = document.getElementsByClassName('overlay2')[0];

login_btn.addEventListener("click", () => {
    login_option.style.display = "block";
    overlay2.style.display = "block";
});