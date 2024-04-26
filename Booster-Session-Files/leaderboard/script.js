var scores = [
  
    
]

// Sorting Functions
// 0 = orignal
// -1 = ab
// 1 = ba
function comparatorT(a,b)
{
    if(a["score"] > b["score"])
    {
        return -1;
    }
    else if (b["score"] > a["score"])
    {
        return 1;
    }
    else{
        return 0;
    }
}

function displayData(data)
{
    let main = document.getElementById("info")
    //1. clear the old results
    main.innerHTML = "";

    //2. sort data
    data.sort(comparatorT)

    // 3. New data show
    data.forEach((item, index) => {

        // div
        let box = document.createElement("div")
        box.classList.add("row")

        // name
        let name = document.createElement("p")
        name.innerText = item["firstName"] + item["lastName"]

        // country
        let country = document.createElement("p")
        country.innerText = item["country"]

        // score
        let score = document.createElement("p")
        score.innerText = item["score"]

        // delete
        let delete1 = document.createElement("button")
        delete1.innerText = "Delete"
        delete1.addEventListener("click", () => deleteScore(index))

        // increment
        let plus5 = document.createElement("button")
        plus5.innerText = "+5"
        plus5.addEventListener("click", () => incrementScore(index) )

        // decrement
        let minus5 = document.createElement("button")
        minus5.innerText = "-5"
        minus5.addEventListener("click",() => decrementScore(index));

        // append all the elemetns in the box
        box.append(name)
        box.append(country)
        box.append(score)
        box.append(delete1)
        box.append(plus5)
        box.append(minus5)


        // append div in the ifo box
        main.append(box)



    })

}

function deleteScore(index)
{
    scores.splice(index,1)
    displayData(scores);
    
}

function incrementScore(index)
{
    scores[index]["score"] += 5;
    displayData(scores);
}
function decrementScore(index)
{
    scores[index]["score"] -= 5;
    displayData(scores);
}

function addData(fname,lname,score,country)
{
    let obj = {
        "firstName": fname,
        "lastName": lname,
        score,
        country,
    }
    scores.push(obj)
    displayData(scores);
}


window.addEventListener("load", () => {
    // 1. Show all the default scores
    displayData(scores)
    // 2. Add the listner on the form
    document.getElementById("scoreform").addEventListener("submit", (e) => {
        // stop the screen reload
        e.preventDefault();
        // Fetch data
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let country = document.getElementById("country").value;
        let score = parseInt(document.getElementById("score").value);
        // Add
        addData(fname,lname,score,country)

    })
} )
