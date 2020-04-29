var winHeight = $(window).height(),
  docHeight = $(document).height();
  max = docHeight - winHeight;

$(progress).attr('max', max);

var value = $(window).scrollTop();
$(progress).attr('value', value);

$(document).on('scroll', function() {
  value = $(window).scrollTop();
  progressBar.attr('value', value);
});

$(document).on('ready', function() {
  var winHeight = $(window).height(),
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
});

max = docHeight - winHeight; // equal to zero.
