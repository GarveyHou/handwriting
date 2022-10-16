//1.原型链继承

/* 原型链继承的主要问题： 引用类型的属性被所有实例共享 在创建Child的实例的时候，不能向Parent传参*/
function Parent() {
  this.name = '张三'
  this.children = ['A', 'B']
}
Parent.prototype.getChildren = function () {
  console.log(this.children)
}

function Child() {}
Child.prototype = new Parent()

var child1 = new Child()
child1.children.push('child1')
child1.getChildren() // Array ["A", "B", "child1"]

var child2 = new Child()
child2.children.push('child2')
child2.getChildren() // Array ["A", "B", "child1", "child2"]

// 2.借用构造函数
/* 
优点：
避免了引用类型的属性被所有实例共享；
可以直接在Child中向Parent传参；
缺点：
方法都在构造函数中定义了，每次创建实例都会创建一遍方法，函数复用就无从谈起了,不能继承原型链上的方法 */
function Parent(age) {
  this.names = ['lucy', 'dom']
  this.age = age

  this.getName = function () {
    return this.name
  }

  this.getAge = function () {
    return this.age
  }
}

function Child(age) {
  Parent.call(this, age)
}

var child1 = new Child(18)
child1.names.push('child1')
console.log(child1.names) // [ 'lucy', 'dom', 'child1' ]
var child2 = new Child(20)
child2.names.push('child2')
console.log(child2.names) // [ 'lucy', 'dom', 'child2' ]

// 3.组合继承
/* 组合继承既具有原型链继承能够复用函数的特性，又有借用构造函数方式能够保证每个子类实例能够拥有自己的属性以及向超类传参的特性，但组合继承也并不是完美实现继承的方式，因为这种方式在创建子类时会调用两次超类的构造函数。*/
function Parent(name, age) {
  this.name = name
  this.age = age
  this.colors = ['red', 'green']
  console.log('parent')
}

Parent.prototype.getColors = function () {
  console.log(this.colors)
}

function Child(name, age, grade) {
  Parent.call(this, name, age) // 创建子类实例时会执行一次
  this.grade = grade
}

Child.prototype = new Parent() // 指定子类原型会执行一次
Child.prototype.constructor = Child // 校正构造函数
Child.prototype.getName = function () {
  console.log(this.name)
}

var c = new Child('alice', 10, 4)
c.getName()
