

function changeColor()
{
    let colors = ["red","blue","green", "blue", "orange", "pink"]
    let circleBox = document.getElementById("outer");
    let index = Math.floor(Math.random()*(colors.length-1));
    circleBox.style.backgroundColor = colors[index];
}

function changeShape()
{
    let shapes = ["box","circle2"]
    let shape = document.getElementById("inner");
    let index = Math.floor(Math.random()*(shapes.length-1));
    
    let classes = shape.classList
    classes.forEach( (item) => {
        if(shapes.includes(item) == true)
        {
            shape.classList.remove(item)
        } 
    })

    shape.classList.add(shapes[index])
}

document.getElementById("color").addEventListener("click", changeColor )
document.getElementById("shape").addEventListener("click", changeShape )

