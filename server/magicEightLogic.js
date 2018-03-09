
let phrases =
["The candles say yes!",
"Si",
"Meh, better get Vics Vapor Rub",
"Without a doubt",
"The Bruja says no",
"I'm thinking yes",
"Your abuela says yes ",
"Concentrate and ask again",
"Outlook, es no bueno ",
"The Bruja says yes ",
"Better not tell you now",
"Very doubtful",
"Si, si and si!!!",
"Claro que si! ",
"Cannot predict now, ask your abuela",
"Maybe yes, maybe no",
"Eat some guac and ask again later",
"No way jose",
"Plans are looking good",
"Don\'t count on it mija"];


const pickAnswer = function() {
  let indexVal = Math.floor(Math.random() * phrases.length);

  return phrases[indexVal];
}

module.exports.pickAnswer = pickAnswer;
