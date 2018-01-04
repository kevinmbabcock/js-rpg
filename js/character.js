export class Character {
  constructor (name, profession) {
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

  }


}
