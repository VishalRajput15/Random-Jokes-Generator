const jokeBtn = document.querySelector("#jokeBtn");
const jokeText = document.querySelector("#jokeText");


jokeBtn.addEventListener("click",()=>{
    const promise = fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    promise.then((response)=>{
        return response.json()
    })
    .then((data)=>{
        jokeText.innerText = (data.joke)        
    })
    .catch((err)=>{
        jokeText.innerText = err;
    })
    
})


