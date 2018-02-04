$("#collapse1").click(function(){
    $( "#multiCollapse1" ).toggle();
    $("#multiCollapse2").collapse("hide");
    $("#multiCollapse3").collapse("hide");
});
$("#collapse2").click(function(){
    $( "#multiCollapse2" ).toggle();
    $("#multiCollapse1").collapse("hide");
    $("#multiCollapse3").collapse("hide");
});
$("#collapse3").click(function(){
    $( "#multiCollapse3" ).toggle();
    $("#multiCollapse1").collapse("hide");
    $("#multiCollapse2").collapse("hide");
});