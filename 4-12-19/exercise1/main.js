
$('#myButton1').click(function(){
    $.get('http://jsonplaceholder.typicode.com/posts',  function(posts){
        const list = $('ul.1');
        posts.forEach(function(post){
            const li = $('<li></li>');
            li.text(post.body);
		    list.append(li);
            
        })
        console.log(posts);
    });
});



$('#myButton2').click(function(){
    $.get('http://jsonplaceholder.typicode.com/posts',{id: 10},  function(posts){
        const list = $('ul.1');
        posts.forEach(function(post){
            const li = $('<li></li>');
            li.text(post.body);
		    list.append(li);
            
        })
        
    });
});

$('#myButton3').click(function(){
    $.get('http://jsonplaceholder.typicode.com/comments?postId=12',  function(posts){
        const list = $('ul.1');
        posts.forEach(function(post){
            const li = $('<li></li>');
            li.text(post.body);
		    list.append(li);
            
        })
        console.log(posts)
    });
});

$('#myButton4').click(function(){
    $.get('http://jsonplaceholder.typicode.com/posts',{userId: 2},  function(posts){
        const list = $('ul.1');
        posts.forEach(function(post){
            const li = $('<li></li>');
            li.text(post.body);
		    list.append(li);
            
        })
        console.log(posts)
    });
});

$('#myButton5').click(function(){
    $.post('http://jsonplaceholder.typicode.com/posts',{
        userId: 1,
        title: "New Post",
        body: "Muahwhahahaha"
    }, function(post){
        console.log(post.id)
    })
});


$('#myButton6').click(function(){
    $.ajax({
        method: 'PUT',
        url: 'http://jsonplaceholder.typicode.com/posts/12/',
        data: { title: "updated", body: "updated" , userId: "1"},
        complete: function(response){
            //handle response which usually includes the updated object.
            console.log(response.responseJSON);
        }
        
    });

    
});


$('#myButton7').click(function(){

    $.ajax({
        method: 'PUT',
        url: 'http://jsonplaceholder.typicode.com/posts/12/',
        data: { title: "updated"},
        complete: function(response){
            //handle response which usually includes the updated object.
            console.log(response.responseJSON);
        }
        
    });
    

    
});


$('#myButton9').click(function(){
    $.get('http://jsonplaceholder.typicode.com/posts',  function(posts){
        const list = $('ul.1');
        posts.forEach(function(post){
            const li = $('<li></li>');
            li.text(post.body);
            list.append(li);
            $('li').click(function(){
                var id = this.id;
                $.get(`http://jsonplaceholder.typicode.com/comments/${id}`,   function(posts){
                    const lists = $('ul.2');
                    posts.forEach(function(post){
                        const li = $('<li></li>');
                        li.text(post.body);
                        lists.append(li);
                        
                    })
                    console.log(posts);
                })
                        
                
            });
            
        })

        
        console.log(posts);
    });
});



