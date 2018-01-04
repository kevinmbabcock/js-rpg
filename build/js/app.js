(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = exports.Character = function Character(name, profession) {
  _classCallCheck(this, Character);

  this.name = name;
  this.profession = profession;
  this.level = 1;
  this.health = 100;
  this.lives = 3;
  this.items = [];
  if (this.profession === "wizard") {
    this.strength = 2;
    this.intelligence = 7;
    this.items.push("wand");
  } else if (this.profession === "monster") {
    this.strength = 7;
    this.intelligence = 2;
    this.items.push("club");
  } else if (this.profession === "soldier") {
    this.strength = 4;
    this.intelligence = 5;
    this.items.push("rifle");
  } else if (this.profession === "knight") {
    this.strength = 5;
    this.intelligence = 4;
    this.items.push("sword");
  }
};

},{}],2:[function(require,module,exports){
"use strict";

var _character = require("./../js/character.js");

$(document).ready(function () {
  $("#character-form").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var profession = $("#profession").val();
    var user = new _character.Character(name, profession);
    var opponentProfession = "";
    var randomNumber = Math.floor(Math.random() * 4 + 1);
    if (randomNumber === 1) {
      opponentProfession = "wizard";
    } else if (randomNumber === 2) {
      opponentProfession = "monster";
    } else if (randomNumber === 3) {
      opponentProfession = "soldier";
    } else if (randomNumber === 4) {
      opponentProfession = "knight";
    }
    var opponent = new _character.Character("Opponent", opponentProfession);
    console.log(opponent.profession);
  });
});

},{"./../js/character.js":1}]},{},[2]);
