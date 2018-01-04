import { Character } from './../js/character.js';

$(document).ready(function() {
  $("#character-form").submit(function(event) {
    event.preventDefault();

    let name = $("#name").val();
    let profession = $("#profession").val();
    let user = new Character(name, profession);
    let opponentProfession = "";
    let randomNumber = Math.floor((Math.random() * 4) + 1);
    if (randomNumber === 1) {
      opponentProfession = "wizard";
    } else if (randomNumber === 2) {
      opponentProfession = "monster";
    } else if (randomNumber === 3) {
      opponentProfession = "soldier";
    } else if (randomNumber === 4) {
      opponentProfession = "knight";
    }
    let opponent = new Character("Opponent", opponentProfession);
    console.log(opponent.profession);
  })
})
