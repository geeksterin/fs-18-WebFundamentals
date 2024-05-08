

// var let const : a-z, A-Z, 0-9, _ , not start with digits
// console.log(a)
// let a = 20;

// Hoisted Code
// var a ;
// console.log(a)
// a = 20;

// Hoisted Code
// let a; // TDZ
// console.log(a)
// a = 20; // TDZ end

// let age =20;
// if ( age < 18)
// {
//     console.log("No")
// }
// else if ()
//     {

//     }
//     else if ()
//         {

//         }
// else 
// {
//     console.log("Yes")
// }

// let b = "AB";
// switch(b)
// {
//     case "AB":
//         console.log("Nine teen")
//         break;
//     case 20:
//         console.log("Twenty")
    
// }

// Normal Functions
// function say()
// {
//    console.log("Hi") 
// }
// say();
// Functions with arguments
// function say(a)
// {
//     console.log(a)
// }
// say(10)
// Functions with default arguments
// function say(a=10)
// {
//     console.log(a)
// }
// say()

// Functions with return values
// function say(a=10)
// {
//     return a*10;
// }
// let r = say(9)
// console.log(r)

// var name = "Ashis"
// let a = {
//     "name": "Geekseter",
//     "domain" : "EdTech",
//     "printName" :  function() {
//         console.log(this.name)
//     }
// }


// a.printName()

// call bind
// let a = {
//     "name": "Geekseter",
//     "domain" : "EdTech",
//     "printName" :  function() {
//         console.log(this.name)
//     }
// }
// let b = {
//     "name" : "Ashsih"
// }
// var temp  = a.printName.call(b);
// temp();


// for in
// let marks = {
//     "maths":90,
//     "science":20,
//     "DBMS": 19
// }
// for(let data in marks)
// {
//     console.log(data,marks[data])
// }
// for of
// let a = [67,3,3]
// for (let data of a)
//     {
//         console.log(data)
//     }
// forEAch
// a.forEach( (value,idnex) => {
//     console.log(value,idnex)
// })


// let i = 0;
// while(i <= 5)
// {
//     console.log(i);
//     if( i == 3)
//     {
//             i+=1;
//             continue;
//     }
//     else if ( i == 4)
//         {
//             break;
//         }
//      i+=1;

// }

// ordered, mutate
// let a = [78,45,34,23]
// console.log(a.splice(1,2,"HI"))
// console.log(a)


// ordered , no mutate
// let a = "ashish-dsf-sdfdf-dfdf-sdf"
// console.log(a.split("-"))

let a = "http://localhost:5500/index.html?id=dog&name=ashish&age=23&slug=hello"

function toReturnParamter(url)
{
    let search = a.split("?")[1]
    let keyvalues = search.split("&") 
    let ans = {
    }
    keyvalues.forEach( (item,index) => {
        let values = item.split("=") // "id=5" ==> ["name","ashish"]
        ans[values[0]] = values[1]
    })

    return ans
}
console.log(toReturnParamter(a))