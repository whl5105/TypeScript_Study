js 선언방식

```javascript
let str = "hello";
```
<br />

ts 문자선언
```javascript
let str: string = "hello";
```
<br />

ts 숫자
```javascript
let num: number = 10;
```
<br />

ts 배열
```javascript
let arr: Array<number> = [1, 2, 5]; // 1.
let items: number[] = [1, 2, 3]; // 2.리터럴 방식의 선언
let items2: { id: number, title: string, done: boolean }[]; //배열안의 프로퍼티 타입 선언
let heroes: Array<string> = ["Capt", "Thor", "Hulk"];
```
<br />

ts 튜플
튜플: 배열의 특정 인덱스 , 순서의 타입까지 정의하는것 
```javascript
let tuple: [string, number] = ["gangnam", 100];
```
<br />

ts 객체
```javascript
let object: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100
// }
let person: { name: string, age: number } = {
  name: "capt",
  age: 100,
};
```
<br />

ts 진위값
```javascript
let show: boolean = true;
```


<hr />

함수의 타입 정의 
함수의 파리미터의 값이 있을 경우 , 반환되는값이 있을경우
```js
function add(a: number,b: number):number{
  return a+b;
}
add(10,20); 
add(10,20,30,40); //error
//ts에서는 불필요한 인자를 찾아낸다.(파라미터의 제한 ,엄격한 체크 )
```

함수의 옵셔널 파라미터 (추가적인 파라미터)
```js
function log(a: string,b?: string, c?: string){

}
log('hi');
log('hi','abc');
//필요에따라 인자를 선택적으로 넘길 수 있다. 
```