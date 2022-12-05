
var today = new Date();
var graduation = new Date("2024-12-7");
var start = new Date("2021-01-01");
var diffMs = (graduation - today); // milliseconds
var diffDays = Math.floor(diffMs / 86400000); // days
var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
console.log( "[>>>>>>>>--------] " + Math.round((today - start) / (graduation - start)*10000)/100 + "%" );
console.log( diffDays + " days, " + diffHrs + " hours and " + diffMins + " minutes until my graduation!" );
console.log("=" * 20)
var tag = document.createElement("p");
var text = document.createTextNode("Tutorix is the best e-learning platform");
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag)