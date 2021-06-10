//QUESTION 1

// // creating a function that will take in the information from the user

class Student{
    constructor(name,stream,subject,date){
this.name=name;
this.stream=stream;
this.subject=subject;
this.date=date;

    }
    getDetails(){
        return `My name is ${this.name} and i am in ${this.stream}.I love ${this.subject}.`
    }
 getResults() {
    var name = document.getElementById("name").value;
    var stream = document.getElementById("class").value;
    var subject= document.getElementById("subject").value;
    var date = document.getElementById("date").value;
    if (name != null && stream != null && subject != null && date != null) {
        alert("Name:" + name + "      Class:" + stream + "       Subject:" + subject +
            "    Date:" + date);
            return(true)

    //         // displaying the information as a popup on the screen
    // document.getElementById("Submit").addEventListener;{
    //     var a= document.getElementById("toast");
    //     a.Student= "show";
    // setTimeout(function(){ a.Student = a.Student.replace("show", ""); }, 3000);
        

    // }
    
    } 
    else {
        alert("You did not sit for the quiz");
        return (false);
    }
  
}
}
let student=new Student("Purity","AnitaB","javascript")
console.log(getDetails())


//QUESTION 2
// creating an object...has keys and values
// we are supposed to store our object in a variable so that we can be able to access it,and give it properties..keys and values.
// curly braces are used to enclose the properties of the object
let student={
    name:"Grace",
    age:23,
    nationality:"Kenyan",
    gender:"Female",

    // adding an array as a value
    hobbies:["dancing","cooking","travelling","hiking"]

}
// accessing the object and printing it out as keys and values....this is known as destructuring
let{name,age,nationality,gender,hobbies}=student
for(let[key,value]of Object.entries(student)){
    console.log(`${key}:${value}`)
}
// using the rest operator and giving it a default value
let{name1,occupation="Freelance journalist",...rest}=student
console.log(occupation);
console.log(rest.hobbies);
console.log(rest.gender);

//QUESTION 3
// there are two scopes in javascript:local and the global scope

var c=100  //global scope..can be accessed anywhere in the program
function count(d){
var result=d+c
console.log(result)

// local/block scope....can only be accessed inside the count function
function inner(a){
    // result1 is a block scope because it can only be accessed within function inner 
    var result1= result-a             
    console.log(result1);    
}
inner(30);
   
    
}
count(50);

function one1(){
  return {
      bar: "hello"
  }
}

function two2(){
  return
  {
      bar: "hello"
  };
}


// QUESTION 4


function one1()
{
  return `
      bar: "hello"`
  
}
console.log(one1())

// function two2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// both function one1 and two2 will not give out an output because the functions have not ben called.
// also the functions are returning an object that is not named..for example it should have been var b={bar:"hello"} then you return b
// and outside the function you console.log(one1/two2())  
// for bar:"hello" to be printed out,we would have use the string templates (``) to return the output and then print
// it out .This is how it would look

// function one1()
// {
    // return `
        // bar: "hello"`
    
//   }
//   console.log(one1())