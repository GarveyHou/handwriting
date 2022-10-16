// Promise.reject().finally(() => console.log(456))
// const p = new Promise((resolve, reject) => {})
// p.finally(() => {
//   console.log(789)
// })

// class A {
//   constructor() {
//     // return new Promise((resolve, reject) => {})
//   }
// }
// let a = new A()
// console.log(a)

// const a = 64

// console.log(a.toString(10))

function a(a, b) {
  console.log(a + b)
}

// function fn() {
//   // console.log(args)
//   // console.log([].concat([...arguments]))
//   const obj = { a: 1, b: 2 }
//   console.log([...obj])
//   // console.log(arguments[1])
//   // console.log([...arguments])
//   // a.apply(null, [...arguments])
// }

// fn(1, 8, 5, 9, 7)

// const p = new Promise((resolve, reject) => {
//   reject()
// })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     return new Promise((a, b) => {
//       b()
//     })
//   })
//   .then(() => console.log(888))
//   .catch(() => console.log(999))

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)


// console.log(p)
// console.log(p)
