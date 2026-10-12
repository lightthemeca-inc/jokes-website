let jokes = [];
let remainingJokes = [];


// Load the jokes
fetch("jokes.json")
    .then(response => response.json())
    .then(data => {
        jokes = data;

        resetJokes();
        showRandomJoke();
    })
    .catch(error => {
        console.error("Could not load jokes:", error);
    });


// Start a new round
function resetJokes() {
    remainingJokes = [...jokes];
}


// Show a random joke without repeating
function showRandomJoke() {

    if (remainingJokes.length === 0) {
        resetJokes();
    }

    const randomIndex =
        Math.floor(Math.random() * remainingJokes.length);

    const joke = remainingJokes[randomIndex];

    // Remove this joke so it can't appear again
    remainingJokes.splice(randomIndex, 1);

    document.getElementById("category").textContent =
        "😂 " + joke.category;

    if (joke.answer) {
        document.getElementById("joke").innerHTML =
            joke.question + "<br><br>" + joke.answer;
    } else {
        document.getElementById("joke").textContent =
            joke.question;
    }
}


// Random joke button
document.getElementById("randomButton").addEventListener("click", () => {
    showRandomJoke();
});