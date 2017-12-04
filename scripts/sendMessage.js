const input = $('.message__input');

input.keydown(function (e) {
  const $this = $(this);
  const chatPanel = $('.chat__panel.active');
  const chatPanelActiveAttr = chatPanel.attr('data-target');
  const chatContact = $('.chatlist__body-panel[data-target="' + chatPanelActiveAttr +'"]');


  if (e.keyCode == 13) {
  const inputValue = $this.val();
  const message = generateMessageTemplate(inputValue,false,true);

    $this.val('');
    chatPanel.append(message);
    setEmoticons();
    chatContact.find('.chatlist__person-msg').text(inputValue);

    setTimeout(function(){
      const dumbResponse = inputValue.split('').reverse().join('');
      chatPanel.append(generateMessageTemplate(dumbResponse,true,true));
      setEmoticons();
      chatContact.find('.chatlist__person-msg').text(dumbResponse);
    },3000);

  }
});

function generateMessageTemplate(text,isLeft,isNewMessage){
  const orientaionClass = isLeft ? 'chat__message-wrap--left':'chat__message-wrap--right';
  const tempClass = isNewMessage ? 'posted' : '';
  return '<div class="chat__message clearfix">' +
                    '<div class="chat__message-wrap '+ orientaionClass+'">' +
                      '<span class="chat__text ' + tempClass +'">' + text + '</span>' +
                    '</div>' +
                  '</div>';
}

function setEmoticons(){
  const newElement = $('.posted');
  newElement.emoticons();
  newElement.removeClass('posted');
}

$(document).ready(function(){
    $('.chat__text').emoticons();
});

$('.chatlist__body-panel').each(function(index,element){
    const $element = $(element);
    const dataTarget = $element.attr('data-target');
    const messageContainer = $('.chat__panel[data-target="'+ dataTarget+ '"]');
    const lastMsg = messageContainer.find('.chat__text:last').text();
    $element.find('.chatlist__person-msg').text(lastMsg);
});
