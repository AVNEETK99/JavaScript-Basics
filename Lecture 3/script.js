/*for loop*/
console.log(`\n`);
console.log("for loop")
console.log(`\n`);
for(i=10;i>=0;i--){
    console.log(i);
}
console.log(`\n`);





/*while loop*/
console.log(`\n`);
console.log("while loop")
console.log(`\n`);
i=6
while(i<=10){
    console.log(i);
    i++;
}

console.log(`\n`);





/*do-while loop*/
console.log(`\n`);
console.log("do-while loop")
console.log(`\n`);
i=11
do{
    console.log(i);
    i++;
}
while(i<=15);







console.log(`\n`);
console.log("Break")
console.log(`\n`);
/*break statement*/
for(i=0;i<=5;i++){
    if(i==4){
        break;
    }
    console.log(i);
}






console.log(`\n`);
console.log("Continue")
console.log(`\n`);
for(i=0;i<=5;i++){
    if(i==4){
        continue;
    }
    console.log(i);
}







console.log(`\n`);
console.log("try-catch")
console.log(`\n`);
try{
    const result=someUndefinedVariable + 10;
    console.log(result);
}
catch(error){
    console.log('An error occured :',error.message);
}





console.log(`\n`);
console.log("try-catch-throw-finally")
console.log(`\n`);
try{
    let num=10;
    if(num>5){
        throw new Error("Number is greater than 5");
    }
    console.log("this line will not be executed");
}
catch(error){
    console.log("An error occured:",error.message);
}
finally{
    console.log("This block is always executed.");
}