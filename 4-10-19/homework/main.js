// array = [];
function add(){
    var newLI = document.createElement('li');
    var input = document.getElementById('todo').value;
    // array.push(input);
    newLI.innerHTML = input;
    var newlist = document.querySelector('ul');
    var added = newlist.appendChild(newLI);
    
    added.onclick = function() {
       
        this.parentNode.removeChild(this);
    }
    document.getElementById('todo').value = '';
}

