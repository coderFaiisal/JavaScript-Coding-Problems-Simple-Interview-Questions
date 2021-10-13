var numbers = [34, 56, 34, 63, 63, 77, 87, 77, 34];
var uniqueName = [];

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    var index = uniqueName.indexOf(element);   //indexof niye jante hobe aro.
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);