const aiCardTitleWrap = document.querySelectorAll('.ai_card_titleWrap');

let maxHeight = 0;
aiCardTitleWrap.forEach(item => {
  if (item.offsetHeight > maxHeight) {
    maxHeight = item.offsetHeight;
  }
});
aiCardTitleWrap.forEach(item => {
  item.style.height = maxHeight + 'px';
});