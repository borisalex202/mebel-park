(function($) {

  @@include('./partials/_search.js');
  @@include('./partials/_sliders.js');

  $('[data-toggle]').on('click', function(){
    var el = $(this).data('toggle'),
        className = $(this).data('class-name');

    if(className){
      $(el).toggleClass(className);
    } else {
      $(el).toggleClass('active');
    }
  });

})(jQuery);
