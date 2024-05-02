// "https://pokeapi.co/api/v2/type/"

function callApi(url)
{
    const myPromise = new Promise( (resolve,reject) => {
        fetch(url)
        .then( res => res.json())
        .then( data => {
            resolve(data)
        })
        .catch(err => {
            reject(err)
        })
    })

    return myPromise;
   
}

// callApi("https://pokeapi.co/api/v2/type/")
// .then(data => {

//     data.results.forEach((item,index) => {
//         callApi(item.url)
//         .then(data => {
//             data.pokemon.forEach((pok,item) => {
//                 callApi(pok.pokemon.url)
//                 .then(data => console.log(data))
//                 .catch(err => console.log(err))
//             })
//         })
//         .catch(err => console.log(err))
//     })
// } )
// .catch(err => console.log(err) )



callApi("https://pokeapi.co/api/v2/pokemon/151")
.then(data => console.log(data))
.catch(err => console.log(err))
