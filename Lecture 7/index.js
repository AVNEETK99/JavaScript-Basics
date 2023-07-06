//declaring object with function as method
let school={
    name:"ST George",
    location : "Delhi",
    established:"1990",
    displayInfo:function(){
        console.log(`${school.name} was established in ${school.established} at ${school.location}`)
    }
}
school.displayInfo();

//shorthand property
let n='Avneet'
let a='23'
let loc='India'

let user={
    n,
    a,
    loc
}
console.log(user)

//or

let user1={
    name:n,
    age:a,
    location:loc
}
console.log(user)

//for-in loop
const list=[10,20,30,40,50];
let total=0;
for(const item in list){
    total+=list[item]
}
console.log(total)

//copy object 
//1. spread (...) syntax
//2. Object.assign() method
//3. JSON.stringify() and JSON.parse() methods

const per={
    firstName:"Geeks",
    middleName:"For",
    lastName:"Geeks"
}
let p1={...per};//shallow copy
let p2=Object.assign({},per);//shallow copy
let p3=JSON.parse(JSON.stringify(per))//deep copy
console.log(p1);
console.log(p2);
console.log(p3);


//optional chaining
const animal={
    dog:{
        name:"Alex"
    },
    cat:{
        name:"Bob"
    }
}
console.log(animal.dog?.name)
console.log(animal.bird?.name)
console.log(animal.cat?.name)

//destructing object

//example1:new name
const num = {x: 1, y: 2};  
const {x: c, y: b} = num;  
   
console.log(c);   
console.log(b); 

//example2
const num1={
    d:3,
    e:4
}
const {d,e}=num1;
console.log(d);
console.log(e);

//rest operator
let {f,g,...args}={f:10,g:20,h:30,i:40,j:50}
console.log(f);
console.log(g);
console.log(args);

//Object.entries()
const obj={
    n1:"Divya",
    age:25,
    city:"kerela"
}
const entries=Object.entries(obj);
console.log(entries)
const keys=Object.keys(obj)
console.log(keys)
const values=Object.values(obj)
console.log(values)

//this
const person_data={
    naam:"James",
    sayHello1:function(){
        console.log(`hello,my name is ${this.naam}!`);


    }
}
person_data.sayHello1();

//function borrowing
const person1 = {
    name_person: "Rishi",
    age_person: 30,
    greet: function() {
      console.log(`Hi, my name is ${this.name_person} and I am ${this.age_person} years old.`);
    }
  };
  
  const person2 = {
    name_person: "Harsh",
    age_person: 25
  };

  //call()
  person1.greet.call(person2);
  //apply()
  person1.greet.apply(person2);
  
  
  //bind:creates new function
  const greetperson2=person1.greet.bind(person2);
  greetperson2();

  //new constructor
  function User(lname,lage){
    (this.lname=lname),(this.lage=lage);
  }
  const u1=new User("Sadaf",25);
  const u2=new User("Sakshi",26);
  const u3=new User("Ashish",24);
  console.log(u1);
  console.log(u2);
  console.log(u3);