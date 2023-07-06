//declaring array
var school=[1,2,3,4,5];
var school1=new Array(1,"maths",2,"science",3,"english");
console.log(school);
console.log(school1);

//accessing elements of array
var a=school[3];
console.log(a);

//using for loop
for (i=0;i<school1.length;i++){
    console.log(school1[i]);
}

//map method
square=x=>Math.pow(x,2);//arrow function
squares=school.map(square);
console.log(squares);

//filter method
even=y=>y%2==0;
evens=school.filter(even);
console.log(evens);

//reduce method:one single o/p
const sum_val = (acc,current)=>acc+current;
sum_op=school.reduce(sum_val,0);
console.log(sum_op);

//Shallow Copy:we copy the original object into the clone object then the clone object has the copy of the memory address of the original object i.e. both point to the same memory address.
let arr = ['a','b','c'];
let arr2 = arr;
arr2.push('d');
console.log(arr2);
console.log(arr); 

//spread operator :The spread operator helps us expand an iterable such as an array where multiple arguments are needed, it also helps to expand the object expressions. In cases where we require all the elements of an iterable or object to help us achieve a task, we use a spread operator.
//syntax : var var_name = [...iterable]; 

var array1 = [10, 20, 30, 40, 50];
var array2 = [...array1, 60];
console.log(array2);

//rest operator :he rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest operator compresses them. It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier.
//Syntax : function function_name(...arguments) {
//    statements;}
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5)); //15   




//push() method
var arr4=[1,2,3,4];
arr4.push(5);
console.log(arr4);

//pop() method
arr4.pop()
console.log(arr4);

//slice() method
var arr5=[1,2,3,4,5,6,7,8,9,10];
var arr6 = arr5.slice(2,6);
console.log(arr6);

//includes() method
d=arr5.includes(7);
console.log(d);

//sort() method :arr.sort(compareFunction)
//compareFunction: This parameter is used to sort the elements according to different attributes and in a different order.
// compareFunction(a,b) < 0
// compareFunction(a,b) > 0
// compareFunction(a,b) = 0

//example 1 :
var arr7 = [2, 5, 8, 1, 4]
console.log(arr7.sort(function(a, b) {
  return a + 2 * b;
}));

//example 2:
 
let numbers = [20,5.2,-120,100,30,0]
console.log(numbers.sort())


function compare(a,b){
    return a-b;
}
console.log(numbers.sort(compare));

//split method
var str = 'Geeks for Geeks'
var array = str.split("for");
console.log(array);

//join method
var e = [1, 2, 3, 4, 5, 6];
console.log(e.join(''));

//concat method
let arr8 = [1,2,3];
let arr9 = [4,5];
arr8 = arr8.concat(arr9);
console.log(arr8);

//destructuring array
var names = ["alpha", "beta", "gamma", "delta"];
var firstName = names[0];
var secondName = names[1];
console.log(firstName);//"alpha"
console.log(secondName);//"beta"

var [firstName,,thirdName,fourthName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(thirdName);//gamma
console.log(fourthName);//delta

//swapping using destructing array
[firstName, secondName] = [secondName, firstName]
console.log(firstName);//"beta"
console.log(secondName);//"alpha"