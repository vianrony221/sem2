
//var elements for each of the 3 items
var sweatShirt = document.getElementById("sweatShirt");
var keyChain = document.getElementById("keyChain");
var largeCup = document.getElementById("largeCup");

// three functions for each item if clicked.
sweatShirt.onclick = function() {
    document.getElementById("main").src = "images/sweatShirt.png";
    document.getElementById("imgname").innerHTML = "Unisex Crewneck - Burgundy $59.99 CAD";
}
keyChain.onclick = function() {
    document.getElementById("main").src = "images/keyChain.png";
    document.getElementById("imgname").innerHTML = "Timmies Keychain for $10.99 CAD";
}
largeCup.onclick = function() {
    document.getElementById("main").src = "images/largeCup.png";
    document.getElementById("imgname").innerHTML = "Beat the Blues for $19.99 CAD";
}