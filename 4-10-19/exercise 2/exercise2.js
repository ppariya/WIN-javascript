document.getElementById('list').children[1].innerHTML = 'Fair Trade Coffee';

document.getElementById('list').children[3].remove();


var newLI = document.createElement('li');
newLI.innerHTML = 'Cheese Whiz';
var newlist = document.querySelector('ul');
newlist.appendChild(newLI);

var list = document.getElementsByTagName('li');
var length = list.length;

while(length != 0){
    document.getElementById('list').children[length-1].remove();
    length--;
}

array = ['protein powder', 'muscle milk', 'power bars'];
for(i = 0; i < array.length; i++){
    var newLI = document.createElement('li');
    newLI.innerHTML = array[i];
    var newlist = document.querySelector('ul');
    newlist.appendChild(newLI);
}

document.getElementById('list').children[1].className = 'important';