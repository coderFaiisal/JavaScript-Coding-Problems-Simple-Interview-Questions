var saif = 18;
var tahsin = 15;
var rauf = 14;

if(saif>tahsin){
    if(saif>rauf){
        console.log('Saif is bigger');
    }
    else{
        console.log('Rauf is bigger');
    }
    
}
else{
    if(tahsin>rauf){
        console.log('Tahsin is bigger');
    }
    else{
        console.log('Rauf is bigger');
    }
}






//another way to find max value.
var saif = 18;
var tahsin = 19;
var rauf = 14;

var max = Math.max(saif, tahsin, rauf);
console.log(max);
