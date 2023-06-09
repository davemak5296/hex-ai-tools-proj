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
  $('.menu-icon').click( function() {
    $(this).toggleClass('open')
    $(this).hasClass('open')
      ? $(this).text('clear')
      : $(this).text('menu')
    $('.menu').toggleClass('visible invisible').toggleClass('opacity-0 opacity-100');

    $('.menu').hasClass('visible')
    ? $('body').css('overflow-y', 'hidden')
    : $('body').css('overflow-y', 'auto')
  })

// filter logic

  // toggle filter drop down
  $('.filter-btn').click(function() {
    $('.filter-options').toggleClass('opacity-0 opacity-100').toggleClass('invisible')
  })

  // close filter/sort drop down when user click filterBtnsortBtn or outside area of filter/sort drop down
  $('.ai-tools-container').click(function(e) {
    if(!e.target.closest('.filter-btn') && !e.target.closest('.filter-options')) 
      $('.filter-options').addClass('opacity-0 invisible')
    
    if(!e.target.closest('.sort-btn')) 
      $('.sort-options').addClass('opacity-0 invisible')
  })

  let currentModel = '';
  let currentService = '';

  let currentModelCount = 0
  let currentServiceCount = 0
  $('.filter-options li:is(.filter-model, .filter-service)').click(function() {
    // toggle check icon adjacent to each filter option
    let clickedElementClass = $(this).attr('class').split(' ')[0];  // extract filter type (model or service)
    $('li.'+ clickedElementClass).children('i').addClass('hidden')  // select all filter options with that type, and hide their check icon
    $(this).children('i').removeClass('hidden')  // show check icon of clicked filter option

    // (for bp <md ) change filter counter based on no. of filters applied
    let $filterIconSm = $('.filter-icon-sm')
    let $filterIcon = $('.filter-icon')

    if ($(window).width() < 640 ) {
      if ($(this).hasClass('filter-model')) {
        currentModelCount = $(this).attr('data-model-type') ? 0 : 1
      } else if ($(this).hasClass('filter-service')){
        currentServiceCount = $(this).attr('data-service-type') ? 0 : 1
      }

      if (currentModelCount + currentServiceCount === 0) {
        $filterIcon.removeClass('hidden')
        $filterIconSm.addClass('hidden')
        return;
      }

      $filterIcon.addClass('hidden')
      $filterIconSm.removeClass('hidden').text(`${currentModelCount + currentServiceCount}`)
      return
    }
    
    // (for bp >md ) hide/show name of applied filters
    let $filterBtn = $('.filter-btn button')
    let textInOption = $(this).contents().filter(function() {
      return this.nodeType === Node.TEXT_NODE
    }).text().trim()

    if ( $(this).hasClass('filter-model') ) {
      currentModel = $(this).attr('data-model-type') ? '' : textInOption
    } else if ( $(this).hasClass('filter-service')) {
      currentService = $(this).attr('data-service-type') ? '' : textInOption
    }

    if (!currentModel && !currentService) {                           // no filter applied
      $filterIcon.removeClass('border-1 border-black rounded-md bg-black text-white')
      return $filterBtn.text('篩選')
    }
    
    $filterIcon.addClass('border-1 border-black rounded-md bg-black text-white')

    if (!currentModel) return $filterBtn.text(`${currentService}`)    // only model filter applied
    if (!currentService) return $filterBtn.text(`${currentModel}`)    // only service filter applied
    
    return $filterBtn.text(`${currentModel}、${currentService}`)      // both filters applied
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

  //faq wrapper logic
  let $faqTitles = $('.faq-title')
  let $wrappers = $('.faq-wrapper');
  let $contents = $('.faq-wrapper p')

  $faqTitles.click(function() {
    $(this).toggleClass('open')
    $(this).siblings().toggleClass('grid-rows-[0fr] grid-rows-[1fr]').toggleClass('mt-0 mt-4').toggleClass('opacity-0 opacity-100')

    $(this).hasClass('open')
      ? $(this).children().text('remove')
      : $(this).children().text('add')
  })
})
