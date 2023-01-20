$(document).ready(function() {
    $('ul.nav > li').click(function () {
     $('ul.nav > li').removeClass('active');
            $(this).addClass('active');      
        });            
 
 var $div = $("#skill-anim");
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === "class") {
if($div.hasClass( "active" )){
      $("#js-loadingSkills").width(60+"%");
     $("#css-loadingSkills").width(70+"%");
    $("#html-loadingSkills").width(80+"%");
    $("#backbone-loadingSkills").width(40+"%");
    $("#drupal-loadingSkills").width(20+"%");
  }
    } 
    });
});    
observer.observe($div[0],  {
    attributes: true
});
 
});
