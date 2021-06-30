// 1、MyPromise是一个class，使用时必须new一个实例
// 2、MyPromise有三个状态，等待：pending 成功：fulfilled 失败：rejected
// 3、状态只能由pending -> fulfilled 或者 pending -> rejected，而且状态一旦改变，不可逆
// 4、
// let pending = 'PENDING'
// let fulfilled = 'FULFILLED'
// let rejected = 'REJECTED'
// class MyPromise {
//   constructor (executor) {
//     try {
//       executor(this.resolve, this.reject)
//     } catch (error) {
//       this.reject(error.message)
//     }
//   }
//   state = pending
//   value = undefined
//   reason = undefined
//   successCallback = []
//   failCallback = []
//   resolve = (value) => {
//     if (this.state !== pending) return
//     this.state = fulfilled
//     this.value = value
//     while(this.successCallback.length) {
//       this.successCallback.shift()()
//     }
//   }
//   reject = (reason) => {
//     if (this.state !== pending) return
//     this.state = rejected
//     this.reason = reason
//     while(this.failCallback.length) {
//       this.failCallback.shift()()
//     }
//   }
//   then(successCallback, failCallback) {
//     successCallback = successCallback ? successCallback : value => value
//     failCallback = failCallback ? failCallback : reason => reason
//     let promise2 = new MyPromise((resolve, reject) => {
//       if (this.state === fulfilled) {
//         try {
//           let x = successCallback(this.value)
//           resolvePromise(x, resolve, reject)
//         } catch (error) {
//           rejected(error)
//         }
//       } else if (this.state === rejected) {
//         try {
//           let x = failCallback(this.reason)
//           resolvePromise(x, resolve, reject)
//         } catch (error) {
//           rejected(error)
//         }
//       } else {
//         // 异步的处理场景
//         this.successCallback.push(() => {
//           try {
//             let x = successCallback(this.value)
//             resolvePromise(x, resolve, reject)
//           } catch (error) {
//             rejected(error)
//           }
//         })
//         this.failCallback.push(() => {
//           try {
//             let x = failCallback(this.reason)
//             resolvePromise(x, resolve, reject)
//           } catch (error) {
//             rejected(error)
//           }
//         })
//       }
//     })
//     return promise2

//   }
// }
// function resolvePromise(x, resolve, reject) {
//   if (x instanceof MyPromise) {
//     x.then(value => resolve(value), reason => reject(reason))
//   } else {
//     resolve(x)
//   }
// }




const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  state = PENDING
  value = undefined
  reason = undefined
  successCallback = []
  failCallback = []
  resolve = (value) => {
    if (this.state !== PENDING) return 
    this.state = FULFILLED
    this.value = value
    while(this.successCallback.length) this.successCallback.shift()()
  }

  reject = (reason) => {
    if (this.state !== PENDING) return 
    this.state = REJECTED
    this.reason = reason
    while(this.failCallback.length) this.failCallback.shift()()
  }

  then(successCallback, failCallback) {
    successCallback = successCallback ? successCallback : value => value
    failCallback = failCallback ? failCallback : reason => reason
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        let x = successCallback(this.value)
        resolvePromise(x, resolve, reject)
      } else if (this.state === REJECTED) {
        let x = failCallback(this.reason)
        resolvePromise(x, resolve, reject)
      } else {
        // 处理异步场景
        this.successCallback.push(() => {
          let x = successCallback(this.value)
          resolvePromise(x, resolve, reject)
        })
        this.failCallback.push(() => {
          let x = failCallback(this.reason)
          resolvePromise(x, resolve, reject)
        })
      }
    })
    return promise2
  }

}
function resolvePromise(x, resolve, reject) {
  if (x instanceof MyPromise) {
    x.then(value => resolve(value), reason => reject(reason))
  } else {
    resolve(x)
  }
}
module.exports = MyPromise