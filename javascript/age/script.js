// let old = new Date("2002","10","01");
// let ne = new Date();
// console.log(typeof d) = object

// Methods to convert date object into strings
// console.log(d.toString())
// console.log(d.toDateString())
// console.log(d.toLocaleDateString())
// console.log(d.toTimeString())
// console.log(d.toLocaleTimeString())

// // Other Methods
// console.log("Date",d.getDate())
// console.log("Month", d.getMonth())
// console.log("Year",d.getFullYear())
// console.log("Weekday",d.getDay())
// console.log("Hours",d.getHours())
// console.log("Minutes",d.getMinutes())   


// Compare 

function calculateAge(date)
{
    let old = new Date();
    let ne = new Date();

    let diff = ne - old;
    const fullYear = diff/(365.25 * 24 * 60 * 60 * 1000)
    const year = Math.floor(fullYear)
    
    const remainingResults = (fullYear-year)*12
    const months = Math.floor(remainingResults)
    
    const remaingDay = (remainingResults-months)*(365.25/12)
    
    
    return `Years : ${year}, Months: ${months}, Days: ${Math.floor(remaingDay)}`
}

let age = calculateAge("2002-11-01")
console.log(age)


