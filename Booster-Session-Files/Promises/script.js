

async function fetchData()
{
  const data =  await callKaro("https://dummyjson.com/products/1")
  console.log(data)
 // handle
 const result = document.getElementById("result")

 let title = document.createElement("h2")
 title.innerText = data.title

 let description = document.createElement("p")
 description.innerText = data.description

 let img = document.createElement("img")
 img.src = data.thumbnail

 result.append(title,description,img)

 // appned all the images
 data.images.forEach( src => {
    let img = document.createElement("img")
    img.src = src

    result.append(img)
 })
    
}

fetchData()

