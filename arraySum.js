var numbers = [34, 65, 67, 75, 78, 34];
var sum = 0;

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log('Total number of array: =', sum);




function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [34, 65, 67, 75, 78, 34];
var result = getArraySum(numbers);
console.log('In function sum of array=', result);