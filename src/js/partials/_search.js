function resizeSearch() {
  var el = $('.search-icon'),
      parent = el.closest('.search-block'),
      inputSearch = el.closest('.search-block').find('.search-input'),
      distance = $('.main-menu').width() + 100;

    if(parent.hasClass('active')) {
      if($(document).width() >= 992) {
        inputSearch.css('width', distance);
      }
    }
}
$(window).resize(resizeSearch);
$('.search-icon').on('click', function(){
  var parent = $(this).closest('.search-block'),
      inputSearch = $(this).closest('.search-block').find('.search-input'),
      distance = $('.main-menu').width() + 100;

  if(!parent.hasClass('active')) {
    parent.addClass('active');
    if($(document).width() >= 992) {
      inputSearch.css('width', distance);
    }
    return false;
  }
});

$(document).mouseup(function (e){
  var el = $('.search-block');
  if (!el.is(e.target)
      && el.has(e.target).length === 0) {
        el.removeClass('active');
        el.find('.search-input').css('width', 0)
  }
});
