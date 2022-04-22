// ES2015 (ES6)

//생성자 함수
function Person(name,age){
  this.name = name;
  this.age = age;
}

//Class 
class Person {
  constructor(name , age){
    this.name = name;
    this.age = age;
  }
}
let suin = new Person('수인',28);
console.log(suin);
/*
  클래스의는 인스턴스를 만들어주는 역활을 하며 첫번째 로직으로는 초기화메서드인 constructor()를 사용한다. 

  자바스크립트는 프로토타입 기반의 언어다
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
  
*/


