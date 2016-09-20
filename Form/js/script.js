$('.textfield').hover(
    function() {
          $(this).next('.tipstext').stop().fadeIn();
    },
    function() {
        $('.tipstext').stop().fadeOut();
    });

$(function() {
    var $tipsCollection;
       $('input[type="submit"]').on('click', function(e){
       $tipsCollection = $('.tipstext');
       $tipsCollection.css('display','inline-block');
       e.preventDefault();
    });
});

