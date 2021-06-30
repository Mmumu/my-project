
// function Point(x, y) {
//   // this.x = x
//   // this.y = y
//   let a = x
//   let b = y
//   let c = a + b
//   return c
//   // console.log(c, 'c')
// }

// let p = Point(1, 2)
// console.log(p)

// var a = {
//   p: 'Hello',
//   b: {
//     m: function() {
//       console.log(this.p);
//     }
//   }
// };
// a.b.m.apply(a) // undefined
// var a = [10, 2, 4, 15, 9];
// console.log(Math.max.apply(null, a)) // 15

// var o = {
//   f1: function () {
//     console.log(this);
//     var f2 = function () {
//       console.log(this);
//     };
//     // f2()
//   }
// }
// o.f1()
// let a = o.f1
// a()

// var d = new Date();
// var print = d.getTime.call(d);
// console.log(print()) // 1481869925657

// 构造函数
// function Cat (color, size) {
//   this.color = color
//   this.size = size
// }
// console.log(Cat.prototype.constructor === Cat)
// console.log(Cat.prototype)
// let cat1 = new Cat('yellow', 'small')
// let cat2 = new Cat('red', 'middle')
// console.log(cat1.color)

// class Point {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   pain(name) {
//     console.log(name + '在画画')
//   }
// }
// class ColorPoint extends Point {
//   // 构造函数的定义
//   constructor(x, y, z) {
//     super(x, y)
//     this.z = z
//   }
//   when(name) {
//     // super.pain(name)
//     this.pain('小红')
//   }
// }

// let color = new ColorPoint(1, 2, 3)
// console.log(color.x, color.y, color.z)
// color.when('小明')
// console.log(ColorPoint.prototype)

// function Person (name, age) {
//   // prototype上的属性和方法定义
//   this.name = name
//   this.age = age
// }
// Person.prototype.study = function() {
//   console.log(this.name + '正在学习')
// }
// let studentA = new Person('小明', 20)
// studentA.study()

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   get getName() {
//     console.log(this.name, 'nameeeee')
//     return this.name
//   }
//   set setName(value) {
//     console.log(value, 'namennnnnn')
//   }
// }

// let studentA = new Person('小明', '12')
// console.log(studentA.getName)
// studentA.setName = '小红'