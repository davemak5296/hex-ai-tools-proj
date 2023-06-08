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
  // menu icon logic
  let menuIcon = $('.menu-icon');
  let menuClear = $('.menu-clear');
  let menu = $('.menu');

  $('.menu-icon, .menu-clear').click( function() {
    menuIcon.toggleClass('hidden')
    menuClear.toggleClass('hidden')
    menu.toggleClass('visible invisible');
    menu.toggleClass('opacity-0 opacity-100');

    if (menu.hasClass('visible')) {
      $('body').css('overflow-y', 'hidden')
    } else {
      $('body').css('overflow-y', 'auto')
    }
  })
  // menuIcon.click(function(){
  //   menuIcon.toggleClass('hidden')
  //   menuClear.toggleClass('hidden')
  //   menu.toggleClass('visible invisible')
  //   menu.toggleClass('opacity-0 opacity-100')
  // })
  // menuClear.click(function(){
  //   menuIcon.toggleClass('hidden')
  //   menuClear.toggleClass('hidden')
  //   menu.toggleClass('visible invisible')
  //   menu.toggleClass('opacity-0 opacity-100')
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
