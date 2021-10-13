var num = [34, 43, 55, 64, 34, 45, 89];
var max = num[0];
for(var i = 0; i < num.length; i++){
    var elements = num[i];
    if(elements > max){
        max = elements;
    }
}
console.log('Higest value is: ', max);





var rolNum = [3, 4, 6, 3, 5, 6, 9, 178, 67];
var max = rolNum[0];                           //array er first element dorci 0 diye
for(i = 0; i < rolNum.length; i++){       //loop caliye .length diye arry take dorce.
    var elements = rolNum[i];          // array element dorce. array a loop calanor 
    if(elements > max){                 // jonno i dora hoice
        max = elements;  
    }
}
console.log(max);