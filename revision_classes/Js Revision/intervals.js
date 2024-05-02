var count = 0;

function hi()
{
    count += 1;
    console.log(count)
}


var a ;

function startInverval()
{
    a = setInterval(hi,1000)
}


function stop()
{
    clearInterval(a)
    
}

document.getElementById("t").addEventListener("click",stop)
document.getElementById("p").addEventListener("click",startInverval)