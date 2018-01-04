import { Character } from './../js/character.js';

describe('Character', function() {
  let reusableCharacter1;
  let reusableCharacter2;
  let reusableCharacter3;
  let reusableCharacter4;

  beforeEach(function() {
    reusableCharacter1 = new Character("Stan", "wizard");
    reusableCharacter2 = new Character("Dave", "soldier");
    reusableCharacter3 = new Character("Mini", "monster");
    reusableCharacter4 = new Character("Gerald", "knight");
  })

  it('should test create character method', function() {
    expect(reusableCharacter1.strength).toEqual(2);
    expect(reusableCharacter1.intelligence).toEqual(7);
    expect(reusableCharacter1.items).toEqual(["wand"]);
    expect(reusableCharacter2.strength).toEqual(4);
    expect(reusableCharacter2.intelligence).toEqual(5);
    expect(reusableCharacter2.items).toEqual(["rifle"]);
    expect(reusableCharacter3.strength).toEqual(7);
    expect(reusableCharacter3.intelligence).toEqual(2);
    expect(reusableCharacter3.items).toEqual(["club"]);
    expect(reusableCharacter4.strength).toEqual(5);
    expect(reusableCharacter4.intelligence).toEqual(4);
    expect(reusableCharacter4.items).toEqual(["sword"]);
  })
})
