document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.getElementsByClassName('features__add-to-messenger');

  buttons[0].addEventListener('click', function() {
    analytics.track("click-cta-hero");
  });

  buttons[1].addEventListener('click', function() {
    analytics.track("click-cta-hero");
  });

  buttons[2].addEventListener('click', function() {
    analytics.track("click-cta-find");
  });

  buttons[3].addEventListener('click', function() {
    analytics.track("click-cta-notify");
  });

  buttons[4].addEventListener('click', function() {
    analytics.track("click-cta-plan");
  });

  buttons[5].addEventListener('click', function() {
    analytics.track("click-cta-footer");
  });

  var shareFB = document.getElementsByClassName('footer__share--facebook');

  shareFB[0].addEventListener('click', function(e) {
    e.preventDefault();

    analytics.track("share-facebook");
    FB.ui({
      method: 'share',
      href: 'http://www.zephir.io',
    });
  });

  var shareTW = document.getElementsByClassName('footer__share--twitter');

  shareTW[0].addEventListener('click', function() {
    analytics.track("share-twitter");
  });

});