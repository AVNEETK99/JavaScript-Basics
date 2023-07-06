/*arithmetic*/
a=6+6;
console.log(a);

/*if*/
b=5;
if(b==5){
    console.log("Value of b is"+" "+b);
}


/*if-else*/
c=14;
d=20;

if(c>=20){
    console.log("c is greater than d");
}
else{
    console.log("d is greater than c");
}


/*if-else if-else*/
value=3;
if(value==1){
    console.log("value is 1");
}
else if(value==2){
    console.log("value is 2");
}
else if(value==3){
    console.log("value is 3");
}
else{
    console.log("value is greater than 3");
}

/*ternary operator*/
var result = (20>5) ? "it is true":"it is false";
console.log(result);

/*switch case*/

day=4;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;  
    case 4:
        console.log("Thursday");
        break;  
    case 5:
        console.log("Friday");
        break; 
    case 6:
        console.log("Saturday");
        break;   
}