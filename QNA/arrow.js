var name = "Abhinav"
let a = {
    "name":"Ashish",
    "display":  () =>
    {
        console.log(this.name)
    }
}
a.display()