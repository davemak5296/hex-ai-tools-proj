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
  let $menuIcon = $('.menu-icon');
  let $menuClear = $('.menu-clear');
  let $menu = $('.menu');

  $('.menu-icon, .menu-clear').click( function() {
    $menuIcon.toggleClass('hidden')
    $menuClear.toggleClass('hidden')
    $menu.toggleClass('visible invisible').toggleClass('opacity-0 opacity-100');

    $menu.hasClass('visible')
    ? $('body').css('overflow-y', 'hidden')
    : $('body').css('overflow-y', 'auto')
  })

  // filter logic
  $('.filter-btn').click(function() {
    $('.filter-options').toggleClass('opacity-0 opacity-100').toggleClass('invisible')
  })
  $('.ai-tools-container').click(function(e) {
    if(!e.target.closest('.filter-btn') && !e.target.closest('.filter-options')) 
      $('.filter-options').addClass('opacity-0 invisible')
    
    if(!e.target.closest('.sort-btn')) 
      $('.sort-options').addClass('opacity-0 invisible')
  })
  $('.filter-options li:is(.filter-model, .filter-type)').click(function() {
    let clickedElementClass = $(this).attr('class').split(' ')[0];
    let tokenlist = ($(this)[0].classList);
    Array.prototype.map.call(tokenlist, (e,i) => {
      console.log(e)
    })
    $('li.'+ clickedElementClass).children('i').addClass('hidden')
    $(this).children('i').removeClass('hidden')
  });

  // sorter logic
  $('.sort-btn').click(function() {
    $('.sort-options').toggleClass('opacity-0 opacity-100').toggleClass('invisible')
  })
  $('.sort-options li').click(function() {
    $('.sort-btn button').text( $(this).text())
  })

  // carousel logic
  let $carousel = $('.carousel');
  let $carouselItems = $('.carousel-item');
  let $dots = $('.dot');

  let currentIndex = 0;
  let currentScrollLeft = 0, walk = 0;
  let startItem, destItem;

  $carousel.scrollLeft(currentScrollLeft);
  $dots.click(function() {
    if ( currentIndex == $dots.index(this)) return;

    $dots.removeClass('active');
    $dots.eq( $dots.index(this) ).addClass('active');

    startItem = $carouselItems.eq( currentIndex )
    destItem = $carouselItems.eq( $dots.index(this) )
    walk = destItem.offset().left - startItem.offset().left;

    $carousel.animate({ scrollLeft: currentScrollLeft + walk}, 500, 'swing')

    currentIndex = $dots.index(this);
    currentScrollLeft += walk;
  });
})
