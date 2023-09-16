export interface Phone {
  playGame: (name: string) => void;
}

export class DIStudent {
  constructor(private name: string, private phone: Phone) {
    this.phone = phone;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  play() {
    this.phone.playGame(this.name);
  }
}
