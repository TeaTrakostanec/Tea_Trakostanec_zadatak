const app = $('.app__wrapper');
const btnOpen = app.find('.btn--open');

btnOpen.click(function (e) {
    const $this = $(this);
    const dropdown = $this.siblings('.dropdown');
    e.preventDefault();

    dropdown.fadeToggle();
});

$(function() {
  $(document).click(function(e) {
    if ($(e.target).is(btnOpen) === false) {
      $('.dropdown').fadeOut();
    }
  });
});
