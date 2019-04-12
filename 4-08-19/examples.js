// // class Book{
// //     constructor(title, author, year){
// //     this.title = title;
// //     this.author = author;
// //     this.year = year;
// //     }

// //     getSummary() {
// //         return `${this.title} was written by ${this.author} in ${this.year}.`;
// //     }

// //     getAge(){
// //         const age = new Date().getFullYear() - this.year;
// //         return `${this.title} is ${age} years old.`;
// //     }


// //     revise(newYear){
// //         this.year = newYear;
// //         this.revised = true;
// //     }

// //     static topBookStore() {
// //         return "Barns & Noble";
// //     }
// // }

// // class Magezine extends Book{
// //     constructor(title, author, year, month) {
// //         super(title, author, year);
// //         this.month = month;
// //     }
// // }

// // const book = new Book("book one", "Person Lastname", "2017");

// // console.log(book.getSummary());
// // console.log(book.getAge());

// // const mag = new Magezine("mag one", " one person", "2018", "April");

// // console.log(mag.getSummary());


// // Write a Particle constructor function


// // The constructor takes startX and startY parameters
// // Particle will have a property of x that defaults to the value of the argument startX
// // Particle will have a property of ythat defaults to the value of the argument startY
// // Particle will have a property of velocity that defaults to {x: 0, y: 0}
// // Create an empty array named particles
// // Write loop to create 100 particles
// // x values will be assigned from 0-99
// // y will be random from 0 to 500 (Math.random()*500)

// // function Particle(startX,startY){
// //     this.x = startX;
// //     this.y = startY;
// //     velocity = {
// //         x: 0,
// //         y: 0,
// //     }
// // }

// // var time = 0;
// // var gravity = 0.5;

// // Particle.prototype = {
// //     getVelocity: function() {
// //         return time * gravity;
// //     },
// //     move: function(){
        
// //         this.y+=this.getVelocity();
        
// //         if(this.y >= 500){
// //             console.log('bottom');

// //         } 
// //         console.log(particles)
// //     }
// // }

// // var particles = [];

// // for(i = 0; i < 100; i++){
// //     particles.push(new Particle(i, Math.random()*500));
// // }

// // setInterval(function(){
// //     time++;
// //     particles.filter(function(position){
// //         return position.y < 500;
// //     })
// //     .forEach(function(position){
// //         position.move();
// //     });
// // },100)

// // clearInterval(this.setInterval);



// var profile = {
//     name: null,
//     address: null,
//     city: null,
//     state: null,
//     zipcode: null,
//     avatar: null,
// }





// function getProfileUpdate(){
//     return  fah = {
//         name: 'Fah',
//         address: 'Above the ground',
//         city: 'Charlotte',
//         state: 'NC',
//     }
    
// }


// function updateProfile(){
//     Object.assign(profile, getProfileUpdate());
//     console.log(profile);
// }   

// updateProfile();


var list = ['pop tarts','ramen noodles', 'chips','salsa','coffee'];
list.push('fruit loops');
list[4] = 'fair trade coffee';
console.log(list);
list.splice(2,2,'rice','beans');
console.log(list);
var cart = [];
cart.push(list.pop());
cart.push(list.shift());

while (list.length > 0){
    cart.push(list.pop());