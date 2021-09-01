const imageAndTextSections = document.querySelectorAll(
  ".image-and-text-container"
);

$(document).ready(function () {
  // styling image and text sections
  var firstSection = imageAndTextSections[0];
  var secondSection = imageAndTextSections[1];
  firstSection.children[1].style.backgroundColor = "rgb(249, 182, 59)";
  secondSection.children[1].style.backgroundColor = "rgb(162, 162, 162)";
  if ($(window).width() > 768) {
    secondSection.style.flexDirection = "row-reverse";
  }

  // card item transform on hover
  var $cardItem = $(".card-item");
  $($cardItem).hover(
    function () {
      $(this).addClass("card-active");
    },
    function () {
      $(this).removeClass("card-active");
    }
  );

  // carousel
  $(".main-carousel").flickity({
    // cellAlign: "left",
    // contain: true,
    autoPlay: true,
    wrapAround: true,
    imagesLoaded: true,
  });
});
