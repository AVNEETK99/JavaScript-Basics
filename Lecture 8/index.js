//Pure function
function calculateGST( productPrice ) {
    return productPrice * 0.05;
}
 
//OR

var tax = 20;
function calculateGST( productPrice ) {
    return productPrice * (tax / 100) + productPrice;
}


//First-Class Functions
const Arithmetics = {
    add: (a, b) => {
    return `${a} + ${b} = ${a + b}`;
    },
    subtract: (a, b) => {
    return `${a} - ${b} = ${a - b}`
    },
    multiply: (a, b) => {
    return `${a} * ${b} = ${a * b}`
    },
    division: (a, b) => {
    if (b != 0) return `${a} / ${b} = ${a / b}`;
    return `Cannot Divide by Zero!!!`;
    }
    
    }
    
    console.log(Arithmetics.add(100, 100));
    console.log(Arithmetics.subtract(100, 7));
    console.log(Arithmetics.multiply(5, 5));
    console.log(Arithmetics.division(100, 5));


    //Higher-Order Functions
    function fxn1(){
        return "Hello";
    }
    function fxn2(fxn1){
        console.log(fxn1(),"Geeks");
    }
    
    fxn2(fxn1);

    //Arugument Object
    function calculateTotal(a,b){
        return a + b;
       }
       
       const total = calculateTotal(3,4,5,6,7,8,9);
       console.log(total);

    //Usage of rest parameter as argument object

    //Scope :
    //1. Global Scope
    //2. Local Scope
    //3. Block Scope


    //Scope & Scope Chain
    let a = 10;
    function x(){
      let b = 20 ;
      console.log({ a });
      function y(){
        let c = 30;
        console.log({ b });
        function z(){
         console.log({ c });
        }
        z();
      }
      y();  
    }
    x();
    
    //Closures
    function x(){
        let a = 10;
        return function y(){
         console.log(a);
         let a;
        }
       }
       const z = x();
       z();

       
       
       //Recursion 
       function factorial(n) {
        if (n == 0) return 1;
        return n * factorial(n - 1);
      }
      let num = 5;
      const fact = factorial(num);
      console.log(fact);