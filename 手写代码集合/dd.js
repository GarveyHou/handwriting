// 第一题
class Task {
  constructor() {
    this.queue = []
  }

  add(fn, context, ...args) {
    this.queue.push(function () {
      fn.apply(null)
    })
    return this
  }

  *run() {
    for (let item of queue) {
      yield item()
    }
  }
}

function task1(next) {
  setTimeout(() => {
    console.log(1)
    next()
  }, 3000)
}
function task2(next) {
  setTimeout(() => {
    console.log(2)
    next()
  }, 1000)
}
function task3(next) {
  setTimeout(() => {
    console.log(3)
    next()
  }, 2000)
}
n
const task = new Task()
task.add(task1).add(task2, null, 1).add(task3)
task.run()
// console.log(task.queue)

// function* fn() {
//   let curthis = this
//   yield setTimeout(() => {
//     console.log(1)
//     curthis.next()
//   }, 1000)
//   yield setTimeout(() => {
//     console.log(2)
//     curthis.next()
//   }, 2000)
// }
// fn().next()
// setTimeout(() => {
//   console.log(1)
// }, 3000)


// 第二题
/* 有10个任务，只能并发处理5个任务，设计函数最快处理完10个函数 */

// 第三题，如下怎么跳过f3f4直接执行到catch
// Promise.then(f1)
//   .then(f2)
//   .then(f3)
//   .then(f4)
//   .catch((e) => {
//     console.log('err')
//   })

// 柯力化
