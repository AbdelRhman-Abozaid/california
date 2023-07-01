$(document).ready(function(){
  // *************************8 mixitup ************************
var containerEl = document.querySelector(".project .container");

var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
  animation: {
    effects: "fadeIn scale(0.5)",
  },
});
// ************************* projects section ************************
let links = document.querySelectorAll(".project ul li");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".project ul li.all").classList.remove("all");
    this.classList.add("class", "all");
  });
});
// ********************************************* team section owl curosal ******************
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

$('#sli').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    animateOut: 'fadeOut',
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450
});

$('.video').magnificPopup({
    type: 'iframe'
});

// *************************************** make nav bar slide when scroll ****************
$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 500) {
      document.querySelector(".navbar").classList.add("nav1");

    }else{
      document.querySelector(".navbar").classList.remove("nav1");

    }
  });
  // ********************************8 start wow JS for curosal *******************
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
new WOW().init();

// **************************** Adding and remove active class to nav bar **********
let linkss = document.querySelectorAll(".navbar .nav-item .nav-link");
linkss.forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".navbar .nav-item .nav-link.active").classList.remove("active");
    this.classList.add("class", "active");
  });
});

  
// **************************** make up smooth and stop at off set of section **********

      $(".navbar .nav-item .nav-link").click(function(){
        $('html , body').animate({scrollTop:$('#' + $(this).data("value")).offset().top},1500)
      });
// *********************************** Up button *******************

    $(window).scroll(function () {
      var win = $(this).scrollTop();
      if (win > 700) {
          $(".up").fadeIn(1000);
  
      } else {
          $(".up").fadeOut(1000);
      }
  });
  $(".up").click(function () {
      $("html,body").animate({
          scrollTop: 0
      }, 1000)
  });
  // **************************************************** Spinner Loader ****************************
  $(".spinner .cont").fadeOut(8000,
    function () {
        $(this).parent().fadeOut(5000,
            function () {
                $(this).remove();
            });
    });
}); // end ready function