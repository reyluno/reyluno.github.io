$(window).scroll(function(){
    // calculate how far we've scrolled down, by percentage
    var scrollTo = $(window).scrollTop();
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
    scrollPercent = scrollPercent.toFixed(1);
    console.log(scrollPercent);
    $('#c1').removeClass('filled');
    $('#c2').removeClass('filled');
    $('#c3').removeClass('filled');
    $('#c4').removeClass('filled');
    $('#c5').removeClass('filled');

    if(scrollPercent < 20) {
        $('#c1').addClass('filled');
    } else if(scrollPercent < 40) {
        $('#c2').addClass('filled');
    } else if(scrollPercent < 60) {
        $('#c3').addClass('filled');
    } else if(scrollPercent < 80) {
        $('#c4').addClass('filled');
    } else {
        $('#c5').addClass('filled');
    }

}).trigger('scroll');
