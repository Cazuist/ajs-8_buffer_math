export default class SpecialCharacters {
  constructor(type) {
    this.attack = this.getCharactersList()[type].attack;
    this.isStoned = false;
  }

  setStoned(bool) {
    this.isStoned = bool;
  }

  getStoned() {
    return this.isStoned;
  }

  setAttack(range) {
    this.modifiedAttack = this.attack * (1 - (range - 1) * 0.1);

    if(this.getStoned()) {
      this.modifiedAttack = Math.round(this.modifiedAttack - Math.log2(range) * 5); 
    } 
  }

  getAttack() {
    return this.modifiedAttack;
  }

  // eslint-disable-next-line class-methods-use-this
  getCharactersList() {
    return {
      Magician: { attack: 100, defence: 40},
      Daemon: { attack: 100, defence: 25 },
    };
  }
}
  