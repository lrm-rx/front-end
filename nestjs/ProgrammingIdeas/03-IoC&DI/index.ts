import { DIStudent, Phone } from './di';

class IPhone {
  playGame(name: string) {
    console.log(`${name} play game `);
  }
}

// Stduent -> play -> IPhone强依赖关系
// IPhone依赖与Student -> 解耦
class Student {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  play() {
    const iphone = new IPhone();
    iphone.playGame(this.name);
  }
}

const student = new Student('toimc');

student.play();

class Android implements Phone {
  playGame(name: string) {
    console.log(`${name} use android play game `);
  }
}
const student1 = new DIStudent('toimc1', new Android());
student1.play();
student1.setName('toimc2');
student1.play();

const student2 = new DIStudent('toimc3', new IPhone());
student2.play();
