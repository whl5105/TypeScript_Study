# TypeScript란?

### ms에서 개발한 언어

### 안전하고 예측 가능한 코드 구현에 초점을 맞춘 JS의 상위 집합(Superset) 언어

### TypeScript의 가장 큰 특징은 **기존 자바스크립트에 type System을 적용**한 것

- 자바스크립트의 타입 시스템을 적용했다는 것은 변수, 파라미터, 함수의 반환 값에 타입을 지정할 수 있도록 한 것을 이야기하며 이를 통해서 좀 더 안전하고 예측 가능한 자바스크립트 프로그래밍을 할 수 있도록 하는 것이다

### TypeScript로 작성한 코드는 타입 스크립트 컴파일러(tsc)를 통해 자바스크립트 코드로 변환되고 이후 실행 (Transpiling 트랜스 파일링)

- TypeScript는 javascript 환경에서 실행될 수 없다. 그 이유는 javascript가 실행되는 브라우저가 TypeScript 코드를 이해하지 못하기 때문이다. 따라서 TypeScript로 작성된 코드는 javascript로 다시 컴

<br>
<br>


> ## TypeScript

<br/>

### 1. 관리하기 쉽고 작업하기 쉬운 코드

- 자바스크립트를 사용할 때보다 버그를 줄일 수 있고 유지 보수가 쉽고 조금 더 강력한 질 좋은 코드를 만들 수 있다.

### 2. 타입 표기

- 자바스크립트와 달리 변수를 정의할 때 변숫값에 데이터를 지정할 수 있다. 타입을 표기하게 되면 프로그램을 만들 때 코드가 좀 더 예측이 가능하며 디버깅하기가 쉽다.

예를 들어보자

```javascript
//Javascript
function add(a, b) {
  return a + b;
}
console.log(add("3", "5"));
```

```typeScript
//TypeScript
function add(a: number, b: number) {
  return a + b;
}
console.log(add("3", "5"));

```

javascript의 데이터 타입이 String일 경우 콘솔에 35라는 Stting 값이 출력되며 우리는 아무런 에러 메시지를 받지 않게 된다. 이처럼 javascript에서 어떤 타입도 들어갈 수 있다. 이와 같은 타입의 제약 즉, loosely typed 언어는 프로그램의 유연성은 보장을 하지만 예측 가능하거나 아니면 안전한 코드를 구현하는 데에는 어려움이 있다.

typeScript를 통해 타입을 표기해서 코드를 짜게되면 코드가 실행되기 전에 컴파일 에러 메시지를 받게 된다
함수를 부를 때 argument type이 선언된 함수의 parameter의 타입 Number와 다르기 때문이다
