console.log('have fun !');


$("input").change(function() {
    var prez = {
        first : $("#first_name").val(), 
        last : $("#last_name").val(), 
        city : $("#city").val(),
    };
    $("#username").html(prez.first + " " + prez.last + " de " + prez.city);
});