var Moment = require('moment');
var Request = require('request-promise');

// var dataAccess = {
        exports.getPost = function(postId){
            return Request('http://jsonplaceholder.typicode.com/posts/'+ postId).then(
                response => console.log(response)
            );
    }
// }

// var timeStamp = {
    exports.getTime = function(){
        return console.log( new Moment().format('h:mm:ss a'))
    }
// }

// module.exports = dataAccess;
// module.exports = timeStamp;