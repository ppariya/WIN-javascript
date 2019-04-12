

var header = document.querySelector('header');
var sections = document.querySelectorAll('section');
var current = document.querySelector('section.current');
var nextSection = current.nextElementSibling;
var previousSectionHeader = current.previousElementSibling.children;
var h2 = document.querySelector('h2.highlight').parentElement.parentElement;
var foo = Array.from(document.querySelectorAll('section h2')).map(function(headline){
    return headline.parentElement;
})

console.log(header);
console.log(sections);
console.log(current);
console.log(nextSection);
console.log(previousSectionHeader);
console.log(h2);
console.log(foo);