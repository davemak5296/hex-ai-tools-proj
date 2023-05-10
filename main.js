const aiCardTitle = document.querySelectorAll('.ai_card_titleWrap');

let aiCardTitleMaxHeight = 0;
aiCardTitle.forEach((item) => {
  if (item.offsetHeight > aiCardTitleMaxHeight) {
    aiCardTitleMaxHeight = item.offsetHeight;
  }
});
aiCardTitle.forEach((item) => {
  item.style.height = aiCardTitleMaxHeight + "px";
});
