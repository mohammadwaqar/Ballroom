// js header top fixed
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.wrapper__header').addClass('wrapper__header--shadow');
    } else {
       $('.wrapper__header').removeClass('wrapper__header--shadow');
    }
});

  function openNav() {
    var element = document.getElementById("myNav");
    element.classList.toggle("mystyle");
    
  }
//   menu icon
function myFunction(x) {
    x.classList.toggle("change");}

// slick salider
    $(".slick_salider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        arrows: false,
    });

    // text animation

    var words = ['EVENT SPACE IN CENTRAL HOUSTON,',],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

// menue
//   mobile menu
function openNav() {
  var element = document.getElementById("myNav");
  element.classList.toggle("mystyle");
  var element = document.getElementById("nav__icon--cross");
  element.classList.toggle("change");
 
}
//   

jQuery(window).on('scroll', function () {

  /* PARALLAX EFFECT ON HEADER */
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var paralasicValue = $('.paralasic').attr('data-paralasic');
    $('.paralasic').css('background-position', 'center top -' + scrollTop * paralasicValue + 'px'); /* 1.8 - default value. Increase less to go stopping the effect */
  });

});


$(function () {
  $('#scrlTop').click(function () {
      $('html, body').animate({
          scrollTop: '0px'
      },
      1000);
      return false;
  });
});