const JokeAPI='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

const jokeBtn= document.querySelector('.box button');

async function getJoke() {
    let response= await fetch(JokeAPI);
    let Data= await response.json();
    console.log(Data.joke)
    document.querySelector('.joke').innerHTML=Data.joke;
}

jokeBtn.addEventListener("click", ()=>{
    getJoke();
})