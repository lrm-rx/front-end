// ///<reference path='./components.ts' />

// namespace Home {
//   // class Header {
//   //   constructor() {
//   //     const elem = document.createElement("div");
//   //     elem.innerText = "This is Header!!!";
//   //     document.body.appendChild(elem);
//   //   }
//   // }

//   // class Content {
//   //   constructor() {
//   //     const elem = document.createElement("div");
//   //     elem.innerText = "This is Content!!!";
//   //     document.body.appendChild(elem);
//   //   }
//   // }

//   // class Footer {
//   //   constructor() {
//   //     const elem = document.createElement("div");
//   //     elem.innerText = "This is Footer!!!";
//   //     document.body.appendChild(elem);
//   //   }
//   // }
//   export class Page {
//     user: Components.User = {
//       name: "lpl",
//     };
//     constructor() {
//       // new Header();
//       // new Content();
//       // new Footer();

//       new Components.Header();
//       new Components.Content();
//       new Components.Footer();
//     }
//   }
// }
import { Header } from "./components";
import { Content } from "./components";
import { Footer } from "./components";
export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
