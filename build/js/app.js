(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = exports.Character = function () {
  function Character(name, profession) {
    _classCallCheck(this, Character);

    this.name = name;
    this.profession = profession;
    this.level = 1;
    this.health = 10;
    this.lives = 3;
    this.items = [];
    if (this.profession === "wizard") {
      this.strength = 3;
      this.intelligence = 7;
      this.speed = 5;
      this.items.push("wand");
    } else if (this.profession === "monster") {
      this.strength = 9;
      this.intelligence = 3;
      this.speed = 3;
      this.items.push("club");
    } else if (this.profession === "soldier") {
      this.strength = 4;
      this.intelligence = 5;
      this.speed = 6;
      this.items.push("rifle");
    } else if (this.profession === "knight") {
      this.strength = 7;
      this.intelligence = 5;
      this.speed = 3;
      this.items.push("sword");
    }
  }

  _createClass(Character, [{
    key: "battle",
    value: function battle(opponent) {

      while (this.health > 0 && opponent.health > 0) {
        var result = 0;
        var arena = Math.floor(Math.random() * 3 + 1);
        if (arena === 1) {
          result = this.strength - opponent.strength;
        } else if (arena === 2) {
          result = this.intelligence - opponent.intelligence;
        } else if (arena === 3) {
          result = this.speed - opponent.speed;
        }

        if (result < 0) {
          this.health -= result;
        } else if (result > 0) {
          opponent.health -= result;
        }
      }

      var winner = void 0;
      if (this.health > 0) {
        winner = this.name;
      } else if (opponent.health > 0) {
        winner = "Not You!";
      }
      return winner;
    }
  }]);

  return Character;
}();

var john = new Character("John", "wizard");

},{}],2:[function(require,module,exports){
"use strict";

var _character = require("./../js/character.js");

$(document).ready(function () {
  $("#character-form").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var profession = $("#profession").val();
    var user = new _character.Character(name, profession);
    var opponentProfession = "nothing";
    // console.log(user);
    while (opponentProfession === "nothing") {
      var randomNumber = Math.floor(Math.random() * 4 + 1);
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
    var opponent = new _character.Character("Opponent", opponentProfession);

    $(".character-info").show();
    $(".character-form").hide();

    $(".userName").text(user.name);
    $(".userProfession").text(user.profession);
    $(".userLevel").text(user.level);
    $(".userHealth").text(user.health);
    $(".userLives").text(user.lives);
    user.items.forEach(function (item) {
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
    opponent.items.forEach(function (item) {
      $(".opponentItems").text(item);
    });
    $(".opponentStrength").text(opponent.strength);
    $(".opponentIntelligence").text(opponent.intelligence);
    $(".opponentSpeed").text(opponent.speed);

    $(".btn-danger").click(function (event) {
      event.preventDefault();
      var result = user.battle(opponent);

      $(".character-info").hide();
      $(".result").show();

      $("#winner").text(result);
      $(".userName").text(user.name);
      $(".userProfession").text(user.profession);
      $(".userLevel").text(user.level);
      $(".userHealth").text(user.health);
      $(".userLives").text(user.lives);
      user.items.forEach(function (item) {
        $(".userItems").text(item);
      });
      $(".userStrength").text(user.strength);
      $(".userIntelligence").text(user.intelligence);
      $(".userSpeed").text(user.speed);
    });
  });
});

},{"./../js/character.js":1}]},{},[2]);
