(function($){
//header
var oconnorBody = $("body"),
defaultScroll = 0;
jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop() < defaultScroll && jQuery(this).scrollTop() > 50) {
    $("#header").addClass('affixed');
  } else {
    $("#header").removeClass('affixed');
  }
  defaultScroll = jQuery(this).scrollTop();
})


  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Mobile nav
  $('#main-nav-toggle').click(function () {
    $('#header').toggleClass('mobile-on');
  });
})(jQuery);