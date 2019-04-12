$('#myButton').click(function(){ 
    var text = $('#todo');  //assigned input box id=todo to text
    $('ul').append('<li>' + text.val() +'</li>');  //added input value to unordered list
    
    $('#todo').val('');  //cleared input box
    $('li').click(function(){
        
        $(this).css("text-decoration","line-through");
        $(this).delay(1000).hide(1000); //removed after it has been clicked
    })
})