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

});