$("#collapse1").click(function(){
    $("#multiCollapse1").toggle();
    $("#multiCollapse2").hide();
    $("#multiCollapse3").hide();
});
$("#collapse2").click(function(){
    $("#multiCollapse2").toggle();
    $("#multiCollapse1").hide();
    $("#multiCollapse3").hide();
});
$("#collapse3").click(function(){
    $("#multiCollapse3").toggle();
    $("#multiCollapse1").hide();
    $("#multiCollapse2").hide();
});
$(".menu-nav-a").click(function(){
    $("#navbarTogglerDemo01").toggle();
});
$(".navbar-toggler").click(function(){
    $("#navbarTogglerDemo01").toggle();
});