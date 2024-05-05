var page = 1;
var userInput= "Harry Potter" ;

function fetchMovies(text)
{

    fetch(`http://www.omdbapi.com/?apikey=144e0763&s=${text}&page=${page}`)
    .then(data => data.json())
    .then(res => {
        console.log(res)
        if(res.Search)
        renderData(res.Search)
        else 
        {
            document.getElementById("box").innerText = "No movies found with query " + text
        }
    })
    .catch(err => console.log("Error is",err))
}

function renderData(data)
{
    let box = document.getElementById("box")

    data.forEach((item,index) => {
        let div = document.createElement("div")
        let p = document.createElement("p")
        let img = document.createElement("img")
        img.src = item.Poster
        p.innerText = item.Title
        div.append(img,p)
        box.append(div)
    })
}

// initial data
fetchMovies("harry potter")
var a;

document.getElementById("input").addEventListener("input", (e) => {
    let query = e.currentTarget.value
    if(a)
    {
        clearTimeout(a)
    }
    a =  setTimeout(() =>{ 
        document.getElementById("box").innerHTML = ""
        userInput= query
        page = 1
        fetchMovies(query)
    },1000)
})

function loadMore()
{
    page += 1;
    fetchMovies(userInput)

}

document.getElementById("loadmore").addEventListener("click",loadMore)