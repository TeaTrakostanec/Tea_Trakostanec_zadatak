
var chatOpen = $('.chatlist__body-panel');

chatOpen.each(function () {
  const self = $(this);
  const contactAttr = self.attr('data-target');
  const chatListContactMsg = self.find('.chatlist__person-msg');
  const chat = self.parents('.chatlist').siblings('.chat');
  const chatIndividual = chat.find('.chat__panel');

  chatIndividual.each(function () {
    const selfIndividual = $(this);
    const chatIndividualAttr = selfIndividual.attr('data-target');
    const messageWrapLast = selfIndividual.find('.chat__message').last();
    const messageLast = messageWrapLast.find('.chat__message-bubble').last().text();
  });
});
