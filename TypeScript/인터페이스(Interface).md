
- 반복되는 타입에 대해서 interface로 정의하여 간결한 타입문을 구현 할 수 있다.(상호간의 약속,규칙)

<br />

```js
interface User {
  age: number;
  name: string;
}
```
변수에 인터페이스 활용
```js 
let seho: User ={
  age:33,
  name:'세호'
}
```
<br />

함수에 인터페이스 활용
```js
function getUser(user: User): void{
  console.log(user)
}
const capt = {
  age: 40,
  name: '캡틴'
}
getUser(capt);
```
<br />

함수의 스펙(구조)에 인터페이스를 활용
```js
interface SumFunction{
  (a: number,b: number):number
}
let sum: SumFunction;
sum = function(a: number,b: number ):number{
  return a + b;
}
```
<br />

인덱싱
```js
interface StringArray {
  [index: number]: string;
}
let array: StringArray = ['a','b']
array[0] = 10; //타입에러 
array[0] = 'dd'; 
```
<br />

딕셔너리 패턴
```js
interface StringRegexDictionary {
  [key: string]: RegExp
}
let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
Object.keys(obj).forEach(function(value){});
```
<br />

인터페이스 확장 
```js
interface Person{
  name: string;
  age: number;
}
interface Developer extends Person{ //동일한 인터페이스 상속
  language: string;
}

let captain: Developer ={
  name: '캡틴',
  age: 100,
  language: 'hi'
}

```


