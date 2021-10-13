var a = 7;
var b = 5;
console.log("before swap: a=", a, ',', "b=", b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a=", a, ',', 'b=', b);


//2nd problem solving without using temp.

var x = 3;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log('after swap x=', x, 'y=', y);


// 3rd way to solve problem with javascript way.

var p = 5;
var q = 9;
[p, q] = [q, p];
console.log('after swap: p=', p, 'q=', q);