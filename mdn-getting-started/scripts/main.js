const earthGlobeImg = document.querySelector("img");
let username = "";

earthGlobeImg.onclick = () => {
    if (earthGlobeImg.getAttribute("src") === "images/kawaii-earth-clipart.svg") {
        earthGlobeImg.setAttribute("src", "images/NAI-earth-clipart.jpg");
    } else {
        earthGlobeImg.setAttribute("src", "images/kawaii-earth-clipart.svg");
    }
};

let userChangeButton = document.querySelector("button");
let titleHeading = document.querySelector("h1");
function setUsername() {
    username = prompt("Please enter your name.");
    localStorage.setItem("username", username);
}

if (!localStorage.getItem("username")) {
    setUsername();
} else {
    username = localStorage.getItem("username");
}

userChangeButton.onclick = () => {
    setUsername();
};

titleHeading.textContent = `${username}'s ` + titleHeading.textContent;

/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello, world!";
*/

/* 
document.querySelector("html").addEventListener("click", function() {
    alert("Document was clicked.");
});
*/

/* 
document.querySelector("html").addEventListener("click", () => {
    alert("Document was clicked.");
});
*/