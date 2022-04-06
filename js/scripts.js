$(document).ready(function(){
    $("#turtles").click(function(){
        $("#output1").prop("checked", true).show();
        $("#output2").hide();
        $("#output3").hide();
    });
    $("#snakes").click(function(){
        $("#output1").hide();
        $("#output2").prop("checked", true).show();
        $("#output3").hide();
    });
    $("#insects").click(function(){
        $("#output1").hide();
        $("#output2").hide();
        $("#output3").prop("checked", true).show();
    });
});