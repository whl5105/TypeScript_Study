

  ### 유니온 타입과 인터섹션 타입의 차이점
  ```js
  let suinType : string | number | boolean; 
  let suinsType : string & number & boolean; 
```
  - 유니온 타입의  : 타입 추론(가드) 필요 , 넘기는 인자의 경우 선택가능 
  - 인터섹션 타입  : 별도의 타입추론 불필요 , 모든 타입을 포함하는 인자를 호출 해야한다. 
  



```js
//타입 지정
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
```

### Union Type
- 유니온 타입은 공통되는 속성만 접근할 수  있다.  
- 유니온 타입 적용시 어떤값이 들어올지 모르기 때문에 보장된 속성에 대해서만 접근할 수 있는것 
- 유니온 타입이 장점 : 특정 변수나 파라미터에 다양한 타입지정이 가능 


```js
//Union Type
function askSomeon(someone: Developer | Person){
  someone.name ;
}
askSomeon({name: '수인', skill :'타입스크립트'});
askSomeon({name: '수인이', age :28});
```
<br />

### Intersection Type
  유니온 타입의경우 공통되지 않은 속성을 타입가드 처리를 해주어야하는 반면 
  인터섹션의 경우  string & number & boolean 세가지의 타입을 모두 가지고 있기때문에 접근이 가능하다 . 
 
```js
//Intersection Type
function askSomeon(someone: Developer & Person){
  someone.name ;
  someone.skill ;
  someone.age ;
}
askSomeon({name: '수인', skill :'타입스크립트', age :28});
```

