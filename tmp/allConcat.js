import { Character } from './../js/character.js';

$(document).ready(function() {
  $("#character-form").submit(function(event) {
    event.preventDefault();

    let name = $("#name").val();
    let profession = $("#profession").val();
    let user = new Character(name, profession);
    let opponentProfession = "nothing";
    // console.log(user);
    while (opponentProfession === "nothing") {
      let randomNumber = Math.floor((Math.random() * 4) + 1);
      if (randomNumber === 1 && user.profession !== "wizard") {
        opponentProfession = "wizard";
      } else if (randomNumber === 2 && user.profession !== "monster") {
        opponentProfession = "monster";
      } else if (randomNumber === 3 && user.profession !== "soldier") {
        opponentProfession = "soldier";
      } else if (randomNumber === 4 && user.profession !== "knight") {
        opponentProfession = "knight";
      }
    }
    alert(opponentProfession);
    let opponent = new Character("Opponent", opponentProfession);


    $(".character-info").show();
    $(".character-form").hide();

    $(".userName").text(user.name);
    $(".userProfession").text(user.profession);
    $(".userLevel").text(user.level);
    $(".userHealth").text(user.health);
    $(".userLives").text(user.lives);
    user.items.forEach(function(item) {
      $(".userItems").text(item);
    });
    $(".userStrength").text(user.strength);
    $(".userIntelligence").text(user.intelligence);
    $(".userSpeed").text(user.speed);

    $(".opponentName").text(opponent.name);
    $(".opponentProfession").text(opponent.profession);
    $(".opponentLevel").text(opponent.level);
    $(".opponentHealth").text(opponent.health);
    $(".opponentLives").text(opponent.lives);
    opponent.items.forEach(function(item) {
      $(".opponentItems").text(item);
    });
    $(".opponentStrength").text(opponent.strength);
    $(".opponentIntelligence").text(opponent.intelligence);
    $(".opponentSpeed").text(opponent.speed);

    $(".btn-danger").click(function(event) {
      event.preventDefault();
      let result = user.battle(opponent);

      $(".character-info").hide();
      $(".result").show();

      $("#winner").text(result);
      $(".userName").text(user.name);
      $(".userProfession").text(user.profession);
      $(".userLevel").text(user.level);
      $(".userHealth").text(user.health);
      $(".userLives").text(user.lives);
      user.items.forEach(function(item) {
        $(".userItems").text(item);
      });
      $(".userStrength").text(user.strength);
      $(".userIntelligence").text(user.intelligence);
      $(".userSpeed").text(user.speed);
    })
  });
});
