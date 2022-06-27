// Const Elements
const homeButton = document.querySelector(".homeButton");
const bioButton = document.querySelector(".bioButton");
const resumeButton = document.querySelector(".resumeButton");
const projectsButton = document.querySelector(".projectsButton");
const home = document.querySelector(".Home");
const bio = document.querySelector(".Bio");
const resume = document.querySelector(".Resume");
const projects = document.querySelector(".Projects");
const projectLinks= document.querySelector(".project-links");
const divProjects= document.querySelector(".div-project");
const div1= document.querySelector(".div1");
const div2= document.querySelector(".div2");
const div3= document.querySelector(".div3");
const div4= document.querySelector(".div4");

//functions
const bioPage = function () {
  resume.setAttribute("id", "hide");
  home.setAttribute("id", "hide");
  projects.setAttribute("id", "hide");
  bio.removeAttribute("id", "hide");
};
const homePage = function () {
  resume.setAttribute("id", "hide");
  home.removeAttribute("id", "hide");
  projects.setAttribute("id", "hide");
  bio.setAttribute("id", "hide");
};
const resumePage = function () {
  resume.removeAttribute("id", "hide");
  home.setAttribute("id", "hide");
  projects.setAttribute("id", "hide");
  bio.setAttribute("id", "hide");
};
const projectsPage = function () {
    resume.setAttribute("id", "hide");
    home.setAttribute("id", "hide");
    projects.removeAttribute("id", "hide");
    bio.setAttribute("id", "hide");
};
const linkShow1 = function () {
div1.innerHTML= "<a href=https://git.generalassemb.ly/Ylvauk/fashion-blog>Fashion</a>"
}
const linkHide1= function () {
div1.innerHTML='Fashion Blog'
  
}
const linkShow2 = function () {
div2.innerHTML= "<a href=https://git.generalassemb.ly/Ylvauk/tictactoe>TicTacToe</a>"
}
const linkHide2= function () {
div2.innerHTML='Tic Tac Toe'
  
}
const linkShow3 = function () {
div3.innerHTML= "<a href=https://git.generalassemb.ly/Ylvauk/tamagotchi>Tamagotchi</a>"
}
const linkHide3= function () {
div3.innerHTML='Tomagotchi'
  
}

const test=function () {
    console.log('works')
}
//query selectors
homeButton.addEventListener("click",homePage);
bioButton.addEventListener("click",bioPage);
resumeButton.addEventListener("click",resumePage);
projectsButton.addEventListener("click",projectsPage);
div1.addEventListener("mouseenter",linkShow1);
div1.addEventListener("mouseleave",linkHide1);
div2.addEventListener("mouseenter",linkShow2);
div2.addEventListener("mouseleave",linkHide2);
div3.addEventListener("mouseenter",linkShow3);
div3.addEventListener("mouseleave",linkHide3);

