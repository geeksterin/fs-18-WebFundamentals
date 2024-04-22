
function callKaro(url)
{
    let p = new Promise( (resolve,reject) => {

        fetch(url)
        .then( data => {
            data.json()
            .then( (res) => {
                resolve(res)
            })
            .catch( (err) => {
                reject(err)
            })
        })
        .catch( err => {
            reject(err)
        } )

    })
   
    return p;
}