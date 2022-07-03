$(document).ready(function () {
  //hover and click effect list in sidebar
  $(".list-sidebar").click(function () {
    $(this).addClass("sidebar-hover");
    $(this).siblings().removeClass("sidebar-hover");
  });

  //click sidebar and change main page

  //Home
  $("#nav-home").click(function () {
    $(".mainbar").fadeOut();
    $(".main-home").delay("slow").fadeIn();
    $("this").addClass("sidebar-hover");
  });

  //Profile
  $("#nav-profile").click(function () {
    $(".mainbar").fadeOut();
    $(".main-profile").delay("slow").fadeIn();
    $("this").addClass("sidebar-hover");
  });

  //Experience
  $("#nav-experience").click(function () {
    $(".mainbar").fadeOut();
    $(".main-experience").delay("slow").fadeIn();
    $("this").addClass("sidebar-hover");
  });
  //Skill
  $("#nav-skill").click(function () {
    $(".mainbar").fadeOut();
    $(".main-skill").delay("slow").fadeIn();
    $("this").addClass("sidebar-hover");
  });
  //Project
  $("#nav-project").click(function () {
    $(".mainbar").fadeOut();
    $(".main-project").delay("slow").fadeIn();
    $("this").addClass("sidebar-hover");
  });
});
