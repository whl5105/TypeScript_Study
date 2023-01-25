이넘 : 특정값들의 집합 
- 초기 값을 주지 않으면 0부터 차례로 1씩 증가한다.
- 이넘 사용시 별도의 값을 지정하지 않으면 기본값은 숫자형 으로 취급한다.

### 숫자형 이넘
```js
enum shoes {
  Nike ,
  Adidas 
}

const myShoes = shoes.Nike; 
console.log(myShoes); // 0 
```

### 문자형 이넘
```js
enum home {
  me = '나나'
}
const myHome = home.me; 
console.log(myHome); // '나나'
```


<br />
이넘 선언시 문자와 숫자 를 함께 사용은 가능하지만(복합이넘) 이 방식을 권고하진 않으며 최대한 같은 타입으로 이루어진 이넘을 사용하는것이 좋다 


### 컴파일 시점에서의 이넘 특징
- 이넘이 런타임 시점에서는 실제 객체지만 keyof를 사용할 때 주의해야한다. 일반적으로 keyof를 사용해야 되는 상황에서는 대신 keyof typeof를 사용 