const headerMenu = $('.chatlist__header-menu');
const btnOpen = headerMenu.find('.btn--open');

btnOpen.click(function (e) {
    const $this = $(this);
    const dropdown = $this.siblings('.dropdown');
    e.preventDefault();

    dropdown.fadeToggle();
});
