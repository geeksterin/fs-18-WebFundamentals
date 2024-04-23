async function getDataFromAPI() {
  const url = "https://sudoku-generator3.p.rapidapi.com/generate";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "109c31cdf7mshd5a3d4ba3816a91p14e9b8jsn4cae3a0c2b8b",
      "X-RapidAPI-Host": "sudoku-generator3.p.rapidapi.com",
    },
    body: {
      difficulty: "easy",
      spaces: ".",
      candidates: true,
      list: false,
      grid: true,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}


getDataFromAPI()

// TO READ
/* HOW TO HANDLE CONCURRENT PROMISES?

 - PROMISE.ALL
 - PROMISE.ALLSETTLED
 - PROMISE.ANY
 - PROMISE.RACE

*/

// Create a weather app: openweathermap
// Create a flag app: https://flagcdn.com/