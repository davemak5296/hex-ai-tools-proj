import $ from 'jquery';
window.$ = $;

$(document).ready( function() {
  // let aiCardTitleMaxHeight = 0;
  // $('.ai_card_titleWrap').each( function() {
  //   if (this.offsetHeight > aiCardTitleMaxHeight) {
  //     aiCardTitleMaxHeight = this.offsetHeight;
  //   }
  // }).each( function() {
  //   this.style.height = aiCardTitleMaxHeight + 'px';
  // })

  // carousel logic
  let carousel = $('.carousel');
  let $carouselItems = $('.carousel-item');
  let $dots = $('.dot');

  let currentIndex = 0;
  let currentScrollLeft = 0, walk = 0;
  let startItem, destItem;

  carousel.scrollLeft(currentScrollLeft);
  $dots.click(function() {
    if ( currentIndex == $dots.index(this)) return;

    $dots.removeClass('active');
    $dots.eq( $dots.index(this) ).addClass('active');

    startItem = $carouselItems.eq( currentIndex )
    destItem = $carouselItems.eq( $dots.index(this) )
    walk = destItem.offset().left - startItem.offset().left;

    carousel.animate({ scrollLeft: currentScrollLeft + walk}, 500, 'swing')

    currentIndex = $dots.index(this);
    currentScrollLeft += walk;
  });
})
