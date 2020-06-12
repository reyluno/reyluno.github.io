$(function() {
  var selectedClass = "0";
  $("#gallery").fadeTo(100, 0.1);
  $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
  setTimeout(function() {
    $("." + selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
  }, 300);
  $(".filter").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(200, 1);
    }, 500);
  });
});
