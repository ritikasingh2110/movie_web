const apiurl= "http://www.omdbapi.com/?t=";
const apiKey = "c5cc5740";
const searchBtn = document.getElementById("btn");
const movie_name = document.querySelector("#movie-name");
const poster= document.querySelector("#result_img");

async function getMovies(movie) {
    const response= await fetch(`${apiurl}${movie}&apikey=${apiKey}`);
    const data= await response.json();
    console.log(data);
    if (data.Response== "False") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".row_result").style.display = "none";
    }
    else {
    document.querySelector(".name").innerHTML= data.Title;
    document.querySelector(".genre").innerHTML= data.Genre;
    document.querySelector(".country").innerHTML= data.Country;
    document.querySelector(".released").innerHTML= data.Released;
    document.querySelector(".language").innerHTML= data.Language;
    document.querySelector(".rating").innerHTML= data.imdbRating;
    document.querySelector(".plot").innerHTML= data.Plot;
    poster.src=data.Poster;
    document.querySelector(".error").style.display = "none";
    document.querySelector(".row_result").style.display = "flex";
}
}

searchBtn.addEventListener("click", ()=> {
    getMovies(movie_name.value)
}) ;
