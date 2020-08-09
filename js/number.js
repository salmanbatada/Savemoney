var x = 0;
$(window).scroll(function() {

  var oTop = $('#stats-counter').offset().top - window.innerHeight;
  if (x == 0 && $(window).scrollTop() > oTop) {
    $('.stats-counter-value').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
                 {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    x = 1;
  }
});