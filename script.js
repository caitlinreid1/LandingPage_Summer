function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#link1").click(function() {
   scrollToAnchor('makerspace');
});
$("#link2").click(function() {
   scrollToAnchor('reading');
});
$("#link3").click(function() {
   scrollToAnchor('scholar');
});
$("#link4").click(function() {
   scrollToAnchor('precollege');
});
$("#link5").click(function() {
   scrollToAnchor('start');
});

