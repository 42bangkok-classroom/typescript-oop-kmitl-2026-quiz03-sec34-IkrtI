import { Character } from "./character";

export class Warrior extends Character {
  weapon: string = "";

  constructor(name: string, weapon: string, health: number = 100) {
    super(name, health);
    this.weapon = weapon;
  }

  getWeapon(): string {
    return this.weapon;
  }
  
  receiveDamage(damage: number) {
    damage = this.name === "King Arthur" ? damage * 0.9 : damage;
    this.health = this.health - damage;
  }
}
