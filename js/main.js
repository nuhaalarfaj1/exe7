

// var mydiv = document.getElementByIdClassName( "box")[0]
// mydiv.style.backgroundcolor ="green";
// mydiv.style.width = "500px";
document.getElementsByClassName("box")[0].style.backgroundColor = "red";

var newH1 = document.createElement("h1");

newH1.innerText = "Do you have to work tomorrow ? ";

document.getElementById("divId1").appendChild(newH1);



var anotherNewH1 = document.createElement("h1");
var newTextNode = document.createTextNode("Don't forget today is Sunday!");

anotherNewH1.appendChild(newTextNode);

document.getElementById("divId2").appendChild(anotherNewH1);
function changeImageSrc() {

var image1 = document.getElementById("image1");
image1.src = "img/2.jpg"
image1.alt = "pic with sunday words "}