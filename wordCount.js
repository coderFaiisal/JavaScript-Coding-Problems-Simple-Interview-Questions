var speech = 'Alhamdulillah for everything. Thank you Allah for everything';

var count  = 0;
for (var i = 0; i < speech.length; i++){
    var car = speech[i];
    if (car == " "){
        count++;
    }
}
console.log(count);


var speech = 'Alhamdulillah for everything. Thank you Allah for everything';

var count  = 0;
for (var i = 0; i < speech.length; i++){
    var car = speech[i];
    if (car == " "){
        count++;
    }
}
count++;
console.log(count);


//if I use double white spece.
var speech = 'Alhamdulillah   for everything. Thank     you Allah for everything';

var count  = 0;
for (var i = 0; i < speech.length; i++){
    var car = speech[i];
    if (car == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);