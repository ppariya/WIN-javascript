var username = $('#username');
// var submit = $('#myButton1');

$('#myButton1').click(function(event) {

    getUserByName(username)
    .then(renderNames)

    getUserByName(username)
    .catch(handleUsernameError)
    .then(getPostsByUser)
    .then(renderPosts);

    getUserByName(username)
    .catch(handleUsernameError)
    .then(getAlbumsByUser)
    .then(renderAlbums);
})


function getUserByName(username){
    return new Promise(function(resolve,reject){
        $.get('http://jsonplaceholder.typicode.com/users?username=' + username.val(), function(users){
            if(users.length){
                resolve(users[0]);
            } else{
            reject('User is not found!');
            }
        })
    })
}

function renderNames(name){
    $('#name').html(name.name);
}

function getPostsByUser(user) {
    return new Promise(function(resolve,reject){
         $.get('http://jsonplaceholder.typicode.com/posts?userId=' + user.id, function(posts){
             resolve(posts);
         });
    })
}

function renderPosts(posts) {
    //render the posts data
    console.log(posts);
    $("#allPosts").html('All Posts')
    const list = $('#posts');
    posts.forEach(function(post){
        const li = $('<li></li>');
        li.click({ postId: post.id }, function(event) {
            $.get('http://jsonplaceholder.typicode.com/comments?postId=' + event.data.postId,   function(comments){
                console.log(comments)
                const lists = $('ul.2');
                comments.forEach(function(comment){
                    const li = $('<li></li>');
                    li.text(comment.body);
                    lists.append(li);
                })
            });
        });
        li.text(post.title);
        list.append(li);
    })
    
}

function handleUsernameError(err){
    console.warn(err, 'Using id=1 instead');
    return {
        username: "Sample User",
        id: 1
    };
}


function getAlbumsByUser(user) {
    return new Promise(function(resolve,reject){
         $.get('http://jsonplaceholder.typicode.com/albums?userId=' + user.id, function(albums){
             resolve(albums);
         });
    })
}

function renderAlbums(albums) {
    //render the posts data
    console.log(albums);
    $("#allAlbums").html('All Albums')
    const list = $('#albums');
        albums.forEach(function(album){
            const li = $('<li></li>');
            li.text(album.title);
		    list.append(li);
            
        })
}

