const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.send("Laleh's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/search", (req, res) => {
  const searchedWord = req.query.word.toUpperCase();
  res.send(
    quotes.filter(
      (quote) =>
        quote.quote.toUpperCase().includes(searchedWord) ||
        quote.author.toUpperCase().includes(searchedWord)
    )
  );
});

//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
//app.listen(3000);
