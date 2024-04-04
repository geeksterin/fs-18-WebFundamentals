const person1 = ["Nawab", 20, 1234512345, 123412341234];

// console.log(person1[0]) //Nawab

// console.log(person1) // prints whole array in console
// document.write(person1) // prints whole array on the screen

//OBJECT: a collection of key - value pairs

// const person = {
//   name: "Nawab",
//   age: 20,
//   phone: 1234512345,
//   aadhaar: 1234312341234,
// };

//DOT NOTATION
// console.log(person.name) //Nawab

// //ARRAY NOTATION
// console.log(person["name"]) //Nawab

// console.log(person.aadhaar) //1234312341234
// console.log(person["aadhaar"]) //1234312341234

// console.log(typeof person1)
// console.log(typeof person)

// console.log(person)  // prints whole object in console

// document.write(person) // this will NOT PRINT whole objet on screen

// const person = {
//     name: "Nawab",
//     age: 20,
//     aadhaar: 1234312341234,
//     phone: 1234512345,
//   };

// console.log(person.name);

// const n = "name"
// console.log(person[n])

// console.log(person)

// console.table(person);

// document.write(person)

// for(let i in person){
//     document.write(i + " : " + person[i] + "<br>")
// }

// document.write(person1.length)
// document.write(person.length)

// for(let i=0;i<4;i++){
//     document.write(person[i])
// }

// const person = {}
// const person = new Object()

// const person = {}

// // person.name = "Abhinav"
// person["name"] = "Abhinav"
// person["age"] = 23
// person["phone"] = 1234512345

// console.log(person);

// person["name"] = "Abhinandan";

// console.log(person);

// // delete person["name"]
// delete person.name

// console.log(person);

// const person = {
//     name: "Nawab",
//     getName: function(){
//         // console.log("Hello World")
//         // return ("Hello " + fname + " " + lname)
//         return this.name;
//     }
// }
// // console.log(person.name)
// // console.log(person.getName("Anuj", "Kushwaha"))
// console.log(person.getName())

// const person = {
//     name: "Kishan",
//     getName: function(){
//         return this.name;
//     }
// }
// // const p = person.name;
// // console.log(p)

// const p = person.getName
// console.log(p()) //in p, "this" is undefined

// // BIND, CALL, APPLY

// console.log(p.call(person));

const employee = {
  name: "Kishan",
  designation: "Full Stack Developer",
  address: {
    city: "Kanpur",
    state: "UP",
    postal_add: {
      pobox: 123,
      pincode: 112233,
    },
  },
};

for(let i in employee){
    document.write(`${i} : ${employee[i]}<br>`)
}
// document.write("<br><br>")

// name : Kishan
// designation : Full Stack Developer
// address_city: "Kanpur"
// address_state: "UP"

// for(let i in employee){
//     if(typeof employee[i] === "object"){
//         for(let j in employee[i])
//         document.write(`address_${j} : ${employee[i][j]}<br>`)
//     }
//     else{
//         document.write(`${i} : ${employee[i]}<br>`)
//     }
// }

// function recursive_object_print(obj){
//     for(let i in obj){
//         if(typeof obj[i] === "object"){
//             recursive_object_print(obj[i])
//         }
//         else{
//             document.write(`${i} : ${obj[i]}<br>`)
//         }
//     }
// }

// recursive_object_print(employee)
