var total_pages = 1;
var current_page = 1;
var userInput = "";

function searchImages(text)
{
    fetch(`https://api.unsplash.com/search/photos?client_id=BemwEqDMBuNz3LFZPpjbEKxJTbgH4v3QJx3A5G1IDko&query=${text}&page=${current_page}`)
    .then(res => res.json())
    .then( data =>{
        let main = document.getElementsByClassName("images")[0]
        main.innerHTML = ""
        data.results.forEach( (item) => {
            let div = document.createElement("div")
            let img = document.createElement("img")
            img.src = item.urls.thumb
            img.classList.add("img")
            let p = document.createElement("p")
            p.innerText = item.alt_description
            div.append(img,p)
            main.append(div)
        })

        total_pages  = data.total_pages
        // sow total pages and current page on frotnend
        document.getElementById("tp").innerText = total_pages;
        document.getElementById("cp").innerText = current_page;
    })
    .catch(err => console.log(err))
}

function next()
{
    if(current_page < total_pages)
    {
        current_page += 1
        searchImages(userInput)
    }

}

function prev()
{
    if(current_page > 1)
    {
    current_page -= 1
    searchImages(userInput)
    }
    
}


document.getElementById("next").addEventListener("click",next)
document.getElementById("prev").addEventListener("click",prev)
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let text = document.getElementsByTagName("input")[0].value
    userInput = text;
    searchImages(text)
})
