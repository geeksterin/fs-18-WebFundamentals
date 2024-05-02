var images = [
    {
        src: "img/1.png",
        name: "burger",
        show: false,
    },
    {
        src: "img/2.png",
        name: "burger",
        show: false,
    },
    {
        src: "img/3.png",
        name: "penut",
        show: false,
    },
    {
        src: "img/4.png",
        name: "penut",
        show: false,
    },
    {
        src: "img/5.png",
        name: "plane",
        show: false,
    },
    {
        src: "img/6.png",
        name: "plane",
        show: false,
    },
    {
        src: "img/7.png",
        name: "icecream",
        show: false,
    },
    {
        src: "img/8.png",
        name: "icecream",
        show: false,
    },
    {
        src: "img/9.png",
        name: "pizza",
        show: false,
    },
    {
        src: "img/10.png",
        name: "pizza",
        show: false,
    },
    {
        src: "img/11.png",
        name: "home",
        show: false,
    },
    {
        src: "img/12.png",
        name: "home",
        show: false,
    },


]

var first = -1; 
var second = -1; 
var score = 0;

function displayData()
{
    let imagesBox = document.getElementById("images")
    imagesBox.innerHTML = "";

    images.forEach((data,index) => {
        if(data["show"] == true)
        {
            let img = document.createElement("img")
            img.src = data["src"]
            imagesBox.append(img)
        }
        else
        {
            let div = document.createElement("div")
            div.classList.add("box")
            div.addEventListener("click",() => handleClick(index))
            imagesBox.append(div)
        }
        
    })
}

function handleClick(index)
{
    if(first == -1)
    {
        images[index]["show"] = true;
        displayData();
        first = index
    }
    else if (second == -1)
    {
        images[index]["show"] = true;
        displayData();
        second = index

        setTimeout(checkImages, 1000 )
      
    }

}

function checkImages()
{
    if(images[first].name == images[second].name)
    {
        first = -1;
        second = -1;

        score += 10;
        document.getElementById("score").innerText = score

    }
    else
    {
        images[first].show = false;
        images[second].show = false;
        first = -1;
        second = -1;
        displayData();
    }
}

function shuffle()
{
    let len = images.length;
    let ans = []
    for(let i = 0 ; i < len ; i++ )
    {
        let randomIndex = Math.floor(Math.random() * images.length)
        ans.push(images[randomIndex])
        images.splice(randomIndex,1)
        
    }
    images = [...ans];
    
}

window.addEventListener("load", () => {
    shuffle();
    displayData()
})
