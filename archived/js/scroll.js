$(window).scroll(function() {
  ;(function() {
    var pageHeight = 0;
    function findHighestNode(nodesList) {
        for (var i = nodesList.length - 1; i >= 0; i--) {
            if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
                var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
                pageHeight = Math.max(elHeight, pageHeight);
            }
            if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
        }
    }

    findHighestNode(document.documentElement.childNodes);
    docHeight = pageHeight;
    // The entire page height is found
    console.log('Page height is', pageHeight);
})();
  // calculate how far we've scrolled down, by percentage
  var scrollTo = $(window).scrollTop(),
    windowHeight = $(window).height();
  scrollPercent = (scrollTo / (docHeight - windowHeight)) * 100;
  scrollPercent = scrollPercent.toFixed(1);

  $('#c1').removeClass('filled');
  $('#c2').removeClass('filled');
  $('#c3').removeClass('filled');
  $('#c4').removeClass('filled');
  $('#c5').removeClass('filled');

  if (scrollPercent < 20) {
    $('#c1').addClass('filled');

  } else if (scrollPercent < 40) {
    $('#c2').addClass('filled');
    alert("greater than 20");
  } else if (scrollPercent < 60) {
    $('#c3').addClass('filled');
  } else if (scrollPercent < 80) {
    $('#c4').addClass('filled');
  } else {
    $('#c5').addClass('filled');
  }

}).trigger('scroll');
