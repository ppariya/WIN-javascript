// var list = ['pop tarts','ramen noodles', 'chips','salsa','coffee'];
// list.push('fruit loops');
// list[4] = 'fair trade coffee';
// console.log(list);
// list.splice(2,2,'rice','beans');
// console.log(list);
// var cart = [];
// cart.push(list.pop());
// cart.push(list.shift());

// while (list.length > 0){
//     cart.push(list.pop());
    
    
// }
// cart = cart.sort();
// cart = cart.reverse();

// console.log(cart.join(','));

// var course = {
// 	name: 'JavaScript Applications',
// 	awesome: true,
// 	teachers: ['Assaf', 'Shane'],
// 	students: [
// 		{
// 			name: 'Steve',
// 			computer: {
// 				OS: 'Linux',
// 				type: 'laptop'
// 			}
// 		},
// 		{
// 			name: 'Katy',
// 			computer: {
// 				OS: 'OSX',
// 				type: 'macbook'
// 			}
// 		},
// 		{
// 			name: 'Chuck',
// 			computer: {
// 				OS: 'OSX',
// 				type: 'macbook'
// 			}
// 		}

// 	],
// 	preReqs : {
// 		skills : ['html', 'css', 'git'],
// 		equipment: {
// 			laptop: true,
// 			OSOptions: ['linux', 'osx']
// 		}
// 	}
// };
// console.log(course.name);
// console.log(course.teachers[1]);
// console.log(course.students[0].name);
// console.log(course.students[1].computer.type);
// console.log(course.preReqs.equipment.laptop);
// console.log(course.preReqs.equipment.OSOptions[1]);
// console.log(course.preReqs.equipment.OSOptions.join(' or '));


// //first way//
// var i = 0;
// var osxList = [];
// while(i < course.students.length){
//     if(course.students[i].computer.OS === 'OSX'){
//         osxList.push(course.students[i].name);
//     }
//     i++;
// }

// console.log(osxList);

// //another way to do it//
// var list = [];
// course.students.forEach(element => {
//     if(element.computer.OS === 'OSX'){
//         list.push(element.name);
//     }
// })
// console.log(list);

const n = 4;

while (n > 0) {
  let sum = 0;

for (let i = 1; i <= n; i += 1) {
  sum += i ** 2;
}

console.log(`${sum} is sum of squares of integers up to and including ${n}`);
}