## Type Anotations 이란

- 변수를 선언할 때 변수값에 타입을 명시 함으써 변수값에 데이터를 지정한다는 것을 의미
<br>
<br>

**Syntax**
```javascript
let x:string = "hihihi"
```
- x값은 이제 string만 할당될 수 있다.


예
```javascript
//TS
let studentID:number = 123;
let stydentName:string = 'suin';

studentID = "hi" //X -> 타입에러 
studentID = 456  //O
```

```javascript
//TS
funxtion getStudentDetails(studentID:number):void{
}{
  return null; 
}
```
- 함수의 파라미터의 매개변수도 변수이기 때문에 타입을 지정할 수 있다.
- 함수의 결과값 또한 타입을 명시할 수 있으며 만약 함수가 아무 값도 반환하지 않는다면 void 타입을 명시할 수 있다.<br>
void => 함수는 아무것도 반환하지 않는다라는 의미<br>
특정 값을 반환하는 함수일 경우 반환되는 타입을 명시!<br>
- 함수는 void, any 아닐 경우 타입이 명시된 함수일 경우 반드시 value가 반환되어야 한다.


```javascript
//TS
funxtion getStudentDetails(studentID:number)
:object
{
  return null; 
}

//TS
funxtion getStudentDetails(studentID:number):{
  let studentID:number = 123;
  let stydentName:string = 'suin';
}{
  return null; 
}
```
- ts로 코드를 짤 때 type에 관한 더 많은 정보를 ts에 제공해 줄수록 ts는 코드를 좀 더 깔끔하고 효과적이게 작성하고 유지 보수할 수 있도록 해준다.
- 단순히 함수의 반환값을 객체로 지정하는 것보다 좀 더 세부적이고 자세하게 객체 구조를 명시할수록 좋다