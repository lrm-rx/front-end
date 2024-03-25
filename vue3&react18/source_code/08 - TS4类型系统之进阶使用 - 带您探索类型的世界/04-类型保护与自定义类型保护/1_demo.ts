
// function foo(n: string|number){

//   (n as string).length

// }


// function foo(n: string|number){

//   if(typeof n === 'string'){
//     n.length
//   }

// }



// function foo(n: { username: string } | { age: number }){
//   if( 'username' in n ){
//     n.username
//   }
// }

// class Foo {
//   username = 'xiaoming'
// }

// class Bar {
//   age = 20
// }

// function baz(n: Foo|Bar){
//   if( n instanceof Foo ){
//     n.username
//   }
// }


// function foo(n: 'username'|123){

//   if( n === 'username' ){
//     n.length
//   }

// }

// is类型谓词，它可以做到类型保护的
function isString(n: any): n is string{
  return typeof n === 'string';
}

function foo(n: string|number){

  if( isString(n) ){
    n.length
  }

}