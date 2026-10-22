// Original user-supplied Joget theme JavaScript, formatted for readability.
$(function () {
  var t = 'Pick who was in the room';
  $('#attendees').attr('data-placeholder', t);
  $('#attendees_chosen li.search-field input').attr('placeholder', t);

  var a = $('header.navbar li.user-link > a.dropdown-toggle');
  if (a.length && !a.find('.ma-avatar').length) {
    var n = $.trim($('li.user-link .profile-name').first().text()) || $.trim($('#welcomeMessage').text());
    var i = n.split(/\s+/).filter(Boolean).map(function (w) { return w[0]; }).slice(0, 2).join('').toUpperCase() || '?';
    a.append($('<span class="ma-avatar"></span>').text(i).attr('title', n));
  }

  var nb = $('.ma-newmeeting-bottom').first();
  if (nb.length && !nb.parent().is('body')) {
    nb.appendTo('body');
  }

  var ga = function () {
    $('.grid-action-add').each(function () {
      if (this.style.backgroundColor || this.style.color || this.style.padding) {
        this.style.removeProperty('background-color');
        this.style.removeProperty('color');
        this.style.removeProperty('padding');
      }
    });
  };
  ga();
  if (window.MutationObserver) {
    new MutationObserver(ga).observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style']
    });
  }
});
