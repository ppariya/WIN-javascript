
var Moment = require('moment');
var Request = require('request-promise');


function log(data) {
console.log(data, new Moment().format('h:mm:ss a')); //logs the current time
}



setInterval(function(){
Request('http://jsonplaceholder.typicode.com/posts/1')
.then(log); 
}, 3000);


