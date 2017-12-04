const inputSearch = $('.search__input');
const arrowIcon = $('.search__icon--arrow');
const magnifierIcon = $('.search__icon--magnifier');

inputSearch.on('focus', function () {
  arrowIcon.addClass('search__icon--active');
  magnifierIcon.fadeOut(500);
});

inputSearch.on('focusout', function () {
  arrowIcon.removeClass('search__icon--active');
  magnifierIcon.fadeIn(500);
});
