var num = 5.8987;
var result = Math.floor(num);
console.log(result);

var num = 5.2987;
var result = Math.ceil(num);
console.log(result);

var num = 5.8987; // round er khtre 0.5 theke beshi hole uporer purno shonkha nibe.
var result = Math.round(num);
console.log(result);


// round er khtre 0.5 theke er niche hole uporer purno shonkha nibe.
var num = 5.3987;  
var result = Math.round(num);
console.log(result);


//random use korle proti bar run korle notun output ashbe 0 theke 1 er majhe.
var num = 5.2987;
var result = Math.random(num); 
console.log(result);


var num = 5.2987;
var randNum = Math.random(num) * 6;
var result = Math.ceil(randNum);
console.log(result);

var num = 5.2987;
var randNum = Math.random(num) * 6;
var result = Math.floor(randNum);
console.log(result);

for(i = 0; i <= 4; i++){
    var num = 3.43;
    var randNum = Math.random(num) * 6;
    var result = Math.round(randNum);
    console.log(result);
}