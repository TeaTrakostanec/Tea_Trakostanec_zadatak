const btnOpenChat = $('.chatlist__body-panel');
const btnCloseChat = $('.chat__header').find('.btn--return');
const chatlist = $('.chatlist');
const intro = $('.intro');
const chatHeader = $('.chat__header');
const chatFooter = $('.chat__footer');
const chatBody = $('.chat__body');
const wWidth = $(window).width();

if (wWidth <= 768) {
  btnOpenChat.each(function () {
    const self = $(this);

    self.click(function (e) {
      const chat = self.parents('.chatlist').siblings('.chat');
      e.preventDefault();

      chat.addClass('chat--open');
      chatlist.addClass('chatlist--open');
    });
  });

  btnCloseChat.click(function (e) {
    e.preventDefault();

    $('.chat').removeClass('chat--open');
    chatlist.removeClass('chatlist--open');
  });
}


btnOpenChat.each(function () {
  const self = $(this);

  self.click(function (e) {

    // contact elements
    const contactAttr = self.attr('data-target');
    const contactAvatar = self.find('.chatlist__avatar-image');
    const contactAvatarAttr = contactAvatar.attr('src');
    const contactName = self.find('.chatlist__person-name').text();

    // chat elements
    const chat = self.parents('.chatlist').siblings('.chat');
    const chatIndividual = chat.find('.chat__panel');
    const chatAvatar = chat.find('.chat__header-avatar-image');
    const chatName = chat.find('.chat__person-name');

    e.preventDefault();

    // hide intro text, and show footer and header when conversation is opened
    intro.hide();
    chatHeader.css('display', 'flex');
    chatFooter.show();
    chatBody.css({'background-image': 'url("images/background.jpg")', 'height': 'calc(100% - 120px)'});

    chatIndividual.each(function () {
      const selfIndividual = $(this);
      const chatIndividualAttr = selfIndividual.attr('data-target');

      // change avatar image and name in header according to open chat conversation
      if (contactAttr != chatIndividualAttr) {
        selfIndividual.fadeOut('fast').removeClass('active');
      } else {
        selfIndividual.fadeIn().addClass('active');
        chatAvatar.attr('src', contactAvatarAttr);
        chatName.text(contactName);
      }
    });
  });
});
