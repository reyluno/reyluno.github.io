
$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#about').position().top){
        alert("scrolled.");
    }
})

function yourActionHere(){
	alert("scrolled!");
}
