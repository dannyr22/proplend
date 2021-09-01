const imageAndTextSections = document.querySelectorAll(
  ".image-and-text-container"
);

$(document).ready(function () {
  // $(".navigation-menu").hide();
  // var $imageAndTextSections = $(".image-and-text-container");
  // var $imageAndTextFirst = $imageAndTextSections[0];
  // var $imageAndTextSecond = $imageAndTextSections[1];
  // $imageAndTextFirst.find(".text-section").css("background-color", "black");

  var firstSection = imageAndTextSections[0];
  var secondSection = imageAndTextSections[1];
  firstSection.children[1].style.backgroundColor = "rgb(249, 189, 78)";
  secondSection.children[1].style.backgroundColor = "#777777";
  secondSection.style.flexDirection = "row-reverse";
});
