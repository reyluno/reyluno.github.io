$(window).scroll(function() {
  (function() {
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
  })();

  // calculate how far we've scrolled down, by percentage
  var landing = document.getElementById('landing');
  var distanceToTop = (-1) * landing.getBoundingClientRect().top;
  windowHeight = $(window).height();
  scrollPercent = (distanceToTop / (docHeight - windowHeight)) * 100;
  scrollPercent = scrollPercent.toFixed(1);
  console.log("DocHeight = " + docHeight);
  console.log("windowHeight = " + windowHeight);
  console.log("scrollTo = " + distanceToTop);
  console.log(scrollPercent);

  $('#c1').removeClass('filled');
  $('#c2').removeClass('filled');
  $('#c3').removeClass('filled');
  $('#c4').removeClass('filled');
  $('#c5').removeClass('filled');

  if (scrollPercent < 20) {
    $('#c1').addClass('filled');
    /*$('#navbar').removeClass('solid');*/
  } else if (scrollPercent < 40) {
    $('#c2').addClass('filled');
    /*$('#navbar').addClass('solid');*/
  } else if (scrollPercent < 60) {
    $('#c3').addClass('filled');
  } else if (scrollPercent < 80) {
    $('#c4').addClass('filled');
  } else {
    $('#c5').addClass('filled');
  }
}).trigger('scroll');
