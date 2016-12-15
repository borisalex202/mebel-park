(function($) {

  var options = {
    headerMd            : 99,
    headerSm            : 79,
    scrollSmooth        : 700,
    scrollbarWidth      : scrollbarWidth()
  }

  @@include('./partials/_search.js');
  @@include('./partials/_sliders.js');
  @@include('./partials/_map.js');

  $('[data-toggle]').on('click', function(){
    var el = $(this).data('toggle'),
        className = $(this).data('class-name');

    if(className){
      $(el).toggleClass(className);
    } else {
      $(el).toggleClass('active');
    }
  });

  $('input, textarea')
    .blur(function() {
        if (!$(this).val()) {
            $(this).closest('.input-block').removeClass('active');
        }
    })
    .focus(function() {
        $(this).closest('.input-block').addClass('active')
    })
    .change(function(){
        var el = $(this);
        if (el.val()) {
            el.addClass('active');
            el.closest('.input-block').addClass('active');
        } else {
            el.removeClass('active');
            el.closest('.input-block').removeClass('active');
        }
    });

  $('.preventDefault').on('click',function (e) {
    e.preventDefault();
  });

  $('.tab-nav a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('.icon-menu').on('click', function(){
    $('body').addClass('no-scroll');
  });
  $('.icon-cross').on('click', function(){
    $('body').removeClass('no-scroll');
  });

  $('.phone').mask("+7(999)99-99-99");
  $('.time').mask('99:99');


  setTimeout(function() {
    if (location.hash) {
      var target = location.hash.match(/^#?(.*)$/)[1],
          headHeight = ($(document).width() >= 992) ? options.headerMd : options.headerSm,
          destination = $('.' + target).offset().top - headHeight;

      $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, options.scrollSmooth);
    }
  }, 1);


  $('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click', function() {
    setTimeout(function() {
        var target = $('.' + location.hash.match(/^#?(.*)$/)[1]),
            headHeight = ($(document).width() >= 992) ? options.headerMd : options.headerSm;

        $('body').removeClass('no-scroll');
        $('.main-menu').removeClass('active');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - headHeight
          }, options.scrollSmooth);
        }
    }, 1);
  });

  $('[data-toggle="modal"]').on('click', function() {
    $('.site-header').css('padding-right', options.scrollbarWidth);
  });
  $('[data-dismiss="modal"], .modal-backdrop, .modal').on('click', function() {
    setTimeout(function() {
      $('.site-header').css('padding-right', '');
    }, 300);
  });
  $('.scroll-pane').jScrollPane();

  $(window).on("resize",function(){
    $('.scroll-pane').jScrollPane();
  });
  $('[data-toggle="tab"]').on('click', function() {
    setTimeout(function() {
    $('.scroll-pane').jScrollPane();
  },1);
  });

  function smoothScrollTo(target) {
    var headHeight = ($(document).width() >= 992) ? options.headerMd : options.headerSm,
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - headHeight
      }, options.scrollSmooth);
    }
  }

  function scrollbarWidth() {
    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    return scrollbarWidth;
  }

})(jQuery);
