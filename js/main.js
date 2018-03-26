console.log("connected");


var myH1 = document.getElementById("myH1");
	myH1.innerText = "welcome!";
var myNewH1 = document.getElementById("myNewH1");

function getInfo() {
	var userInput = document.getElementById("userInput").value;
	console.log(userInput);
		myNewH1.innerText = userInput;
}



var stringArray = ["i", "like", "indian", "food",];
	
for(var i = 0; i < stringArray.length; i++) {
	console.log(stringArray[i]);
}



var myObj = {
	name: "Nuha",
	age: 40,
	isFemale: true
};


console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.isFemale);

var student1 = document.getElementById("student1");
var student2 = document.getElementById("student2");
var student3 = document.getElementById("student3");

student1.innerText = myObj.name;
student2.innerText = myObj.age;
student3.innerText = myObj.isFemale;



var myArray = [
		{
			name: "salem",
			age: "50",
			score:"80"
		},
		{
			name: "asma",
			age: "70",
			score: "90"
		},
		{
			name: "asa",
		age: "20",
			score: "90"
		}
];

for(var i = 0; i < myArray.length; i++) {
	console.log(myArray[i].name);
	console.log(myArray[i].age);
	console.log(myArray[i].score);
}



document.body.style.color = "red";