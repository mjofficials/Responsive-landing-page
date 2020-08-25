// Function used for navigation bar
$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});
// Function used to shrink nav bar removing paddings and adding black background
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});
// Function used for gallery section
$('.filters ul li').click(function () {
  $('.filters ul li').removeClass('active');
  $(this).addClass('active');

  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data
  })
});
var $grid = $(".gallery-grid").isotope({
  itemSelector: ".all",
  percentPosition: true,
  masonry: {
    columnWidth: ".all"
  }
})
// Function used to show the image in the lightbox
var zoomImg = function () {
  // Create evil image clone
  var clone = this.cloneNode();
  clone.classList.remove("zoomD");
  // Put evil clone into lightbox
  var lb = document.getElementById("lb-img");
  lb.innerHTML = "";
  lb.appendChild(clone);
  // Show lightbox
  lb = document.getElementById("lb-back");
  lb.classList.add("show");
};
window.addEventListener("load", function () {
  // Attach on click events to all .zoomD images
  var images = document.getElementsByClassName("zoomD");
  if (images.length > 0) {
    for (var img of images) {
      img.addEventListener("click", zoomImg);
    }
  }
  // Click event to hide the lightbox
  document.getElementById("lb-back").addEventListener("click", function () {
    this.classList.remove("show");
  })
});
