## Static Typing 이란

- 타입을 선언하고 선업된 타입에 맞는 값만이 할당, 반환되어야 한다

<br>
<br>

# **타입 추론(Type Inference)**

- 타입 스크립트에서는 타입 표기가 없는 경우 코드를 읽고 분석하여 타입을 유추해낼 수 있다.

```javascript
//Javascript
let a = 5;
a = "suin";
```

```javascript
//ts
let a = 5;
a = "suin";
```

컴파일 에러 발생 (재할당하려고 하는 변수의 타입이 달라서 할당할 수 없다 .)<br>
예시에서 변수에 할당된 값이 숫자 5이므로 자동으로 number로 추론된다.

```javascript
//ts
let student = {
  name: "suin",
  course: "suin TypeScript",
  codingIQ: 80,
  code: function () {
    console.log("hahaha");
  },
};
student.name = 10; //컴파일 에러 발생
```
- 객체 속의 프로퍼티 할당 값을 확인하고 어떤 타입이 할당 값으로 주어졌는지 타입 추론

- 타입 추론으로 이미 name 프로퍼티에 string으로 추론 되어있는데 number로 재할당 해서 에러 발생

```javascript
//ts
function calculateCodingIQ(lostPoints) {
return 100 - lostPoints;
}
```
- lostPoints type을 명시하지 않아도 ts에서 - 연산자를 통해서 숫자로 추론한다.
