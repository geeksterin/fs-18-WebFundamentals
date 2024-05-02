
fetch("https://api.api-ninjas.com/v1/dadjokes", {
    headers : {
        "X-Api-Key" : "0sQcW9YX4igHdWHYUcWYrw==Fz4UI1sIl3btKAiy"
    }
})
.then(data => data.json())
.then(res => console.log(res))
.catch(err => console.log(err))