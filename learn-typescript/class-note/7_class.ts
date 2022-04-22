// TS와 기존의 ES6문법의 차이점 


//JS
class Person {
  constructor(name , age){
    this.name = name;
    this.age = age;
  }
}
let suin = new Person('수인',28);


//TS
class Person {
  private name : string;
  public age : number;
  readonly log : string;

  constructor(name: string , age: number){
    this.name = name;
    this.age = age;
  }
}
let suin = new Person('수인',28);
/*
  1. 타입 지정 
  2. 접근범위 지정 
  readonly : 접근만 가능하며 실제 값변경 불가능
*/


/*
  class는 추가적인 기능이나 기존의 성질을 바꾸지 않고 기존의 문법을 사용하여 syntactic sugar의 코드라고 할 수 있다.
  리액트에서는 함수형 기반의 hook을 사용하여 코드를 statefull 하게 재사용가능하며 기존의 class 기반으로 사용되는 문법을 리액크 훅에서 함수형 코드를 사용하여 코드구현이 가능하다. 
*/
