export class Character {
  constructor (name, profession) {
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

  battle (opponent) {

    while (this.health > 0 && opponent.health > 0) {
      let result = 0;
      let arena = Math.floor((Math.random() * 3) + 1);
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

    let winner;
    if (this.health > 0) {
      winner = this.name;
    } else if (opponent.health > 0) {
      winner = "Not You!";
    }
    return winner;
  }
}
var john = new Character("John", "wizard");
