
// var Moment = require('moment');
// var Request = require('request-promise');
var myMod = require('./module');


// function log(data) {
// console.log(data, new Moment().format('h:mm:ss a')); //logs the current time
// }



setInterval(function(){
myMod.getPost(1)
.then(myMod.getTime)
}, 3000);
