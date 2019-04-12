$('#submit').click(function(){
    var name = $('#name');
    var email = $('#email');
    var phone = $('#phone');
    var message = $('#message');
    var required = [name, email, phone];
    for(i = 0; i < required.length; i++){
        if(required[i].val() === ""){
            $('p#message').html("Please Fill Out Required Fields").addClass('warning');
            required[i].prev().addClass('warning');
        };
        if(required[i].val() != ""){
            required[i].prev().removeClass();
        };
    }
    if(!$('label').hasClass('warning')){
        $('form').remove();
        $('h2').html("Thanks for your feedback!");
    }
});

