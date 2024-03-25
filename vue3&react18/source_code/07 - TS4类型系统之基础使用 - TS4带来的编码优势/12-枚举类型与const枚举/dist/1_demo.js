"use strict";
// enum Roles {
//   SUPER_ADMIN,
//   ADMIN = 3,
//   USER
// }
// console.log( Roles.SUPER_ADMIN );
// console.log( Roles.ADMIN );
// console.log( Roles.USER );
// enum Roles {
//   SUPER_ADMIN,
//   ADMIN = 3,
//   USER
// }
// console.log( Roles[0] );
// console.log( Roles[3] );
// console.log( Roles[4] );
// console.log( Roles );
// enum Roles {
//   SUPER_ADMIN,
//   ADMIN = 3,
//   USER
// }
// if(role === Roles.SUPER_ADMIN){
// }
// enum Roles {
//   SUPER_ADMIN = 'super_admin',
//   ADMIN = 'admin',
//   USER = 'user'
// }
//枚举既可以作为值，也可以作为类型
// enum Roles {
//   SUPER_ADMIN = 'super_admin',
//   ADMIN = 'admin',
//   USER = 'user'
// }
// let a: Roles.ADMIN = Roles.ADMIN
// const enum Roles {
//   SUPER_ADMIN = 'super_admin',
//   ADMIN = 'admin',
//   USER = 'user'
// }
// console.log( Roles.ADMIN );
var Roles;
(function (Roles) {
    Roles["SUPER_ADMIN"] = "super_admin";
    Roles["ADMIN"] = "admin";
    Roles["USER"] = "user";
})(Roles || (Roles = {}));
Roles.ADMIN = 'ad'; // error 枚举是只读
