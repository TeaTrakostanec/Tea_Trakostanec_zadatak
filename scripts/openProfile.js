const openProfileBtn = $('.dropdown__list-item--profile');
const openProfileAvatar = $('.chatlist__header-avatar');
const closeProfile = $('.profile__header').find('.btn--return');
const profile = $('.profile');

const avatarBig = $('.profile__avatar');
const proileText = $('.profile__about, .profile__disclaimer');

let openProfile = function (e) {
  e.preventDefault();

  profile.addClass('profile--show');
  avatarBig.addClass('show-content');
  proileText.addClass('show-content');
  $('.dropdown').hide();
}

openProfileBtn.click(openProfile);
openProfileAvatar.click(openProfile);

closeProfile.click(function (e) {
  e.preventDefault();

  profile.removeClass('profile--show');
  avatarBig.removeClass('show-content');
  proileText.removeClass('show-content');
});
