const APIKey = '72684e36'
const movieName = document.querySelector('#movieName')
const result = document.querySelector('.result')

// process of checking data and getting data from API
function searchMovie() {
    
    fetch(`http://www.omdbapi.com/?t=${movieName.value}&apikey=${APIKey}`)
    .then(response => response.json())
    .then(data => { 

        if(data.Response == 'False' || movieName.value == '') {
            result.innerHTML = 
            `<div class="not-found">
            <img src="./images/icons8-not-found-100.png" alt="">
            <h4>Ooppss!! Search not found  :(</h4>    
            </div>`
        } 
        else {
            var genreArray = data.Genre.split(",")
            
            result.innerHTML = 
            `<div class="movie-info">
            <img src="${data.Poster}" alt="" class="moviePoster">
            <div class="movie-header">
                <h2>${data.Title}</h2>
                <div>
                    <img src="./images/star-icon.svg" alt="" class="starIcon">
                    <span class="imbdPoint">${data.imdbRating}</span>
                </div>
                <div class="movie-tv">
                    <span class="rated">${data.Rated}</span>
                    <span class="year">${data.Year}</span>
                    <span class="runtime">${data.Runtime}</span>
                </div>
                <div class="movie-genre">
                    <button>${genreArray[0]}</button>
                    <button>${genreArray[1]}</button>
                    <button>${genreArray[2]}</button>
                </div>
            </div>
            </div>
            <p class="plot">Plot: </p>
            <span>${data.Plot}</span>
            <p>Cast:</p>
            <span>${data.Actors}</span>`
        }

        movieName.value = ''
    })

}



