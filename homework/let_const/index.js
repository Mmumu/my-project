// var s = '3';
// for (var i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }

// var i = 0
// if(i < 3) {
//   console.log(i)
// }

// i++
// if(i < 3) {
//   console.log(s[i])
// }

// i++
// if(i < 3) {
//   console.log(s[i])
// }

//=============================================

// 数组的解构
// let [foo, bar, baz] = [1, 2, 3]
// console.log(foo, bar, baz)
// 数组嵌套
// let arr = [1, [2, [3]]]
// let [foo, [bar, [baz]], x, y = function(){return 222}()] = arr
// console.log(foo, bar, baz, x, y)

// 对象解构
// let obj = {
//   foo: '1',
//   bar: '2',
//   baz: 3
// }
// let {foo: foo1, bar, baz} = obj
// console.log(bar, baz, foo1)

// const node = {
//   loc: {
//     start: {
//       line: 1,
//       column: 5
//     }
//   }
// };
// let { loc, loc: { start }, loc: { start: { line }} } = node
// console.log(loc, start, line)

// function move({x, y = 1} = {}) {
//   return [x, y]
// }
// let arr = move({x:2})
// console.log(arr)

// function foo() {
//   return () => {
//     return () => {
//       return () => {
//         console.log('id:', this.id);
//       };
//     };
//   };
// }
// var f = foo.call({id: 1})
// console.log(f, 'f')
// console.log(f.call({id: 2})()()); // id: 1
//var t2 = f().call({id: 3})(); // id: 1
//var t3 = f()().call({id: 4}); // id: 1


// const mySymbol = Symbol();
// const a = {};
// a.mySymbol = 'hello'
// a[mySymbol] = 'hello2'
// console.log(typeof(a.mySymbol), 'mysymbol')
// console.log(a[mySymbol])

// const s = new Set();
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
// console.log(s, 'ss')
// for (let i of s) {
//   console.log(i);
// }
// // 2 3 5 4

// const m = new Map();
// const o = {p: 'Hello World'};
// m.set(o, 'content')
// console.log(m)
// m.get(o) // "content"
// m.has(o) // true
// m.delete(o) // true
// m.has(o) // false


// 从数组中解构值
let { log } = console
// let [a, b, c = 3] = [1, 2, 4]
// log(a, 'aa')
// log(b, 'b')
// log(c, 'c')

// let obj = {
//   foo: [1, 2, 3],
//   bar: {
//     name: 'hahah',
//     age: 12
//   },
//   baz: 'baz'
// }

// let {foo: arr, bar: bar1} = obj
// log(arr, 'arr')
// log(bar1, 'bar1')

// function fn([foo, bar, baz]) {
//   log(foo, 'foo')
//   log(bar, 'bar')
//   log(baz, 'baz')
// }
// fn([1, 2, 3])
// function fn({foo = 'hahah', bar, baz}) {
//   log(foo, 'foo')
//   log(bar, 'bar')
//   log(baz, 'baz')
// }
// fn({bar: 2, baz: 3})

// function fn(name, ...rest) {
//   log(rest, 'rest')
//   log(name, 'name')
// }

// fn(1, 2, 3, 4)

// function makeIterator(array) {
//   let nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < array.length ?
//         {value: array[nextIndex++], done: false} :
//         {value: undefined, done: true};
//     }
//   };
// }

// var it = makeIterator(['a', 'b']);

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// const obj = {
//   [Symbol.iterator] : function () {
//     return {
//       next: function () {
//         return {
//           value: 1,
//           done: true
//         };
//       }
//     };
//   }
// }
// let iterator = obj[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())



// let arr = ['a', 'b', 'c'];
// let ifEaquer = arr[Symbol.iterator] === arr.__proto__[Symbol.iterator]
// console.log(ifEaquer)

// let iter = arr[Symbol.iterator]()
// console.log(iter.next())

// let iter2 = arr.__proto__[Symbol.iterator]()
// console.log(iter2.next())

let arr = new Set([1, 2, 3, 4, 5])
let [a, b, c, d, e] = arr
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
// console.log([...arr])
for (const iterator of arr) {
  console.log(iterator, 'iterator')
}