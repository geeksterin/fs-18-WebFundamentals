
// userId:

// Posts  // Commnets // Friens
let p1 = new Promise( (resolve,reject) => {
    setTimeout(() => resolve("First"),5000)
}).then( (data) => console.log(data))

let p2 = new Promise( (resolve,reject) => {
    setTimeout(() => resolve("Second"),6000)
}).then( data => console.log(data))


// Promise.all([p1,p2]).then( (data) => console.log(data) )



// Promise.all() : All the promises must be resolved
// Promise.any() : Any promsie must be resolved
// Promise.allSettled() : All the promises must be settled ( eighther rejected ro fullfilled)

