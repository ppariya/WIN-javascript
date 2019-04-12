// var woolOwners = {
//     master: 1,
//    	dame: 1,
//   	little boy: 1,
// 	location: "down the lane"
// };
var woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
      "little boy": 1,
      "location": "down the lane"
    }
  ];
  
  

var bags = haveYouAnyWool();

function haveYouAnyWool() {
    var totalBags = 0;
	for (var i = 0; i < woolOwners.length; i++) {
	    totalBags = totalBags + i;
	}
	return totalBags;
};


function baabaaBlackSheep() {
	console.log("BaaBaa BlackSheep have you any wool?");
	if (bags > 0) {
		console.log("yes sir, yes sir " + bags + " bags full");
    }
}

function oneForMy() {
    var person = "";
	for (var i = 0; i < 2; i++) {
		people = Object.keys(woolOwners[i]);
		person = people.toString();
		console.log("one for my " + person + "\n");
	}
}

baabaaBlackSheep();
oneForMy();

var boy = Object.keys(woolOwners[2]);




console.log("one for the " + boy[0] + " that lives " + woolOwners[2].location);

