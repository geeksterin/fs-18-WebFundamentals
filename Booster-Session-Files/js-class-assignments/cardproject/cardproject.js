
var user = {
    "fname":"",
    "lname":"",
    "email":"",
    "phone":""
}

function TakeData()
{
    var name = prompt("Enter you Name")
    var lastname = prompt("Enter your last name")
    var email = prompt("Entr your Email")
    var phone = prompt("Enter your phone")

    user["fname"] = name;
    user.lname = lastname;
    user["email"] = email
    user.phone = phone

    localStorage.setItem("user", JSON.stringify(user))
    displayFunction();
}

function displayFunction()
{
    document.getElementById("fname").innerText = user.fname;
    document.getElementById("lname").innerText = user.lname;
    document.getElementById("email").innerText = user.email;
    document.getElementById("phone").innerText = user.phone;
}

window.addEventListener("load", () => {
    if(localStorage.getItem("user"))
    {
        user = JSON.parse(localStorage.getItem("user"))
        displayFunction();
    }
    else
    {
     TakeData()
    }
   
})