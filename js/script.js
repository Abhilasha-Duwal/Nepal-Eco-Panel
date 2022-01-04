$(document).ready(function () {
    $('.slider-testimonial').slick({
        infinite:true,
        slidesToShow: 2,
        slidesToScroll:2,
        autoplay:true,
        autoplaySpeed: 2000,
        speed:500,
        dots:true,
     // fade: false,
     // adaptiveHeight: true,

    //respomsive slider
        responsive: [
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }]  ,
    // respomdive ends here........

     prevArrow: '<div class="slick-prev slick-arrow"></div>',
     nextArrow: '<div class="slick-next slick-arrow"></div>'
 });
});

// slider for blogs.html page
$(document).ready(function () {
    $('.blog-slider').slick({
        infinite:true,
        slidesToShow: 1,
        autoplay:false,
     // fade: false,
     // adaptiveHeight: true,
     prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-arrow-left"></i>Previous</div>',
     nextArrow: '<div class="slick-next slick-arrow">Next<i class="fas fa-arrow-right"></i></div>'
 });
});

//for the popup-video in the first section of index page
document.querySelector('.first .image-holder').onclick = () =>{
    document.querySelector('.popup-video').style.display='block';
}

document.querySelector('.popup-video span').onclick = () =>{
    document.querySelector('.popup-video').style.display='none';
}


// for navbar icon in small screens
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }