// namespace Components {
//   export namespace SubComponents {
//     export class Test {
//       constructor() {
//         console.log("SubComponents");
//       }
//     }
//   }
//   export interface User {
//     name: string;
//   }
//   export class Header {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Header!!!";
//       document.body.appendChild(elem);
//     }
//   }

//   export class Content {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Content!!!";
//       document.body.appendChild(elem);
//     }
//   }

//   export class Footer {
//     constructor() {
//       const elem = document.createElement("div");
//       elem.innerText = "This is Footer!!!";
//       document.body.appendChild(elem);
//     }
//   }
// }

export class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header!!!";
    document.body.appendChild(elem);
  }
}

export class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content!!!";
    document.body.appendChild(elem);
  }
}

export class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer!!!";
    document.body.appendChild(elem);
  }
}
