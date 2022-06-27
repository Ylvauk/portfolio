// Const Elements
const homeButton = document.querySelector(".homeButton");
const bioButton = document.querySelector(".bioButton");
const resumeButton = document.querySelector(".resumeButton");
const projectsButton = document.querySelector(".projectsButton");
const home = document.querySelector(".Home");
const bio = document.querySelector(".Bio");
const resume = document.querySelector(".Resume");
const projects = document.querySelector(".Projects");

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
const test=function () {
    console.log('works')
}
//query selectors
homeButton.addEventListener("click",homePage);
bioButton.addEventListener("click",bioPage);
resumeButton.addEventListener("click",resumePage);
projectsButton.addEventListener("click",projectsPage);


