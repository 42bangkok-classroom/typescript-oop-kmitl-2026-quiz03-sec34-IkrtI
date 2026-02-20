export class Character {
  name: string = "";
  health: number = 100;

  constructor(name: string, health: number = 100) {
    this.name = name;
    this.health = health;
  }

  getName() : string {
    return this.name;
  }
  getHealth() : number {
    return this.health;
  }
  receiveDamage(damage: number)  {
    damage = this.name === "King Arthur" ? damage * 0.9 : damage;
    this.health -= damage;
  }
}
