/*
    TODO:
        Make Favourites a tab on the nav
        Style the favourites button
        Add likes to session storage
        Make separate js for each tab
        minimise for loops and double for loops for performance
*/
//////////////Skills/////////////////////////////////////////////
const skillsContent = document.getElementsByClassName("skills-content"),
  skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-close";
  }
  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}
//////////////Skills/////////////////////////////////////////////

/* Not working yet
////////////Qualifications/////////////////////////////////////////////
const tabs = document.querySelectorAll("data-target"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});
//////////////Qualifications///////////////////////////////////////////
*/

$(document).ready(function () {
  skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
  });

  //Show hide functionality for Gallery and Comments section
  $("#hideBtn").on("click", function () {
    $(".hideThis").toggle(300);

    if ($(this).text() == "Show") {
      $(this).text("Hide");
      $(this).css("color", "black");
      $(this).css("background-color", "white");
    } else {
      $(this).text("Show");
      $(this).css("color", "white");
      $(this).css("background-color", "black");
    }
  });

  //Drop down on favourites menu
  //Hide the dropdown and remove the bullet points
  $(".accordion").css("display", "none").css("list-style", "none");

  //Change styling of first paragraph to bold on mousehover
  $(".fav-heading").mouseover(function () {
    $(".accordion").slideToggle();
  });

  $(".white-back").css("display", "none");
  //Hide black bar with software apps on portfolio
  $(".image-wrapper").mouseover(function () {
    $(".white-back").slideToggle();
  });
});
