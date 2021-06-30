let MyPromise = require('./MyPromise.js')
let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
    // reject('失败')
    // throw new Error('失败失败')
  }, 2000)
  // resolve('成功')
  // throw new Error('失败失败')
})
// function other() {
//   return new MyPromise((resolve, reject) => {
//     // resolve('other resolve')
//     reject('other reject')
//   })
// }
// promise.then(value => {
//     console.log(value)
//     return other()
// }, reason => {
//     console.log(reason)
// }).then(value => {
//     console.log(value)
// }, reason => {
//   console.log(reason, '2')
// })
promise.then(value => {
  console.log(value, 'then value')
}, reason => {
  console.log(reason, 'then reason')
})
// ========================================================================

// let sourcePromise = new Promise(() => {

// }, () => {

// })
// let resolvePromise = Promise.resolve('foo')
// console.log(resolvePromise.then((value) => {
//   console.log(value)
// }), 'kkk')
