fetch("https://api.api-ninjas.com/v1/dadjokes", {
    headers : {
        "X-Api-Key" : "0sQcW9YX4igHdWHYUcWYrw==Fz4UI1sIl3btKAiy"
    }
})
.then( res => res.json())
.then( data => console.log(data))
.catch( err => console.log("Err",err))