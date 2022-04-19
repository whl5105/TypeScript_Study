//js 문자열
// let str = 'hello';


//ts 문자열
let str: string = 'hello';

//ts 숫자
let num: number = 10;

//ts 배열
let arr: Array<number> = [1,2,5]; // 1
let items: number[] = [1,2,3];    // 2.리터럴 방식의 선언 
let items2: {id: number; title: string; done: boolean}[]; //배열안의 프로퍼티 타입 선언 
let heroes: Array<string> = ['Capt','Thor','Hulk'];

//ts 튜플
let tuple: [string, number] = ['gangnam', 100];

//ts 객체
let object: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100 
// }
let person: {name: string, age: number}={
  name: 'capt',
  age: 100 
}

//ts 진위값
let show: boolean = true;