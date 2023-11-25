function getJoke() {
document.querySelector(".joke").innerHTML = "loading ...";
fetch("https://icanhazdadjoke.com", {
    headers: {
        "Accept": "application/json",
        "User-Agent": "learn-code"
    }
})
.then(res => res.json())
.then(data => document.querySelector(".joke").innerHTML = data.joke)
.catch(err => console.log(err));
}
getJoke();
