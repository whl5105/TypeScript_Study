/*
  제네릭이란 
  - 재사용이 높은 컴포넌트를 만들때 사용되는 특징 
  - 한가지 타입보다는 여러가지 타입에서 동작하는 컴포넌트를 생성하는데 사용된다. 
  - 타입을 마치 함수의 파라미터처럼 받게되는것 
  */

  //js
  // function logText(text) {
  //   console.log(text);
  //   return text;
  // }
  // logText('suin');
  // logText(100);


  // TS generics
  // function logText<T>(text:T):T {
  //   console.log(text);
  //   return text;
  // }
  // logText('suin');
  // logText<string>('suin'); // 명시적으로 넘길 타입을 호출시 지정 가능 
  // logText(100);
  /*
    미리 타입을 지정하는것이아니라 넘져주는 파라미터의 값에따라서 타입이 지정된다. 
  */



// 기존 TS 선언의 문제점 
  function logText(text: string) {
    console.log(text);
    text.split('').reverse().join('');
    return text;
  }
  logText('suin');
  logText(100); // 동일한 코드를 타입을 받기위해 중복으로 선언하게되면 불필요한 코드가 생성된다 

  function logNumber(num: number) {
    console.log(num);
    return num;
  }
  logText('suin');
  logText(100);
  logNumber(100);


  // 유니온 타입 문제점 
  function logTexts(text: string | Number ) {
    console.log(text);
    // text.split('').reverse().join('');
    return text;
  }
  const a = logTexts('suin');
  a.split(''); // 유니온 문자 선언에도 불구하고 에러 발생 (반환값에 정확한 string 선언이 되지 못했기 떄문 )
  logTexts(100);





  // TS generics
  function logGenerics<T>(text:T):T {
    console.log(text);
    return text;
  }
  logGenerics<string>('suin'); // 명시적으로 넘길 타입을 호출시 지정 
  const str = logGenerics<string>('suin'); 
  str.split('') //string형 api사용가능 
  const flag = logGenerics<boolean>(true); 
  /*
    제네릭의 장점 
    - 타입을  호출하는다양한 시점에 정의하므로써 다양한 타입을 인자와 리턴값을 받을 수 있게되면서 
    코드의 재사용을 높이며 해당 타입의 api속성을 자유자재로 사용할 수 있다 
    
  */


  // 제네릭의 타입 제한 
  function logTextLength<T>(text: T[]): T[] { // 제네릭으로 받은 타입을 배열로 활용하겠다.
    console.log(text.length);
    text.forEach(function (text) {
      console.log(text);
    });
    return text;
  }
  logTextLength<string>('hihi');
  logTextLength<string>(['hi','abc']);

    // 제네릭의 타입 제한 2 - 정의된 타입 이용하기 
    interface LengthType {
      length: number;
    }
    function logTextL<T extends LengthType>(text: T): T {  //항상 LengthType 있는 상태에서 추가로 받을 수 있다. 
      console.log(text.length);
      return text;
    }
    logTextL('a');
    logTextL(100);  //숫자타입은 길이를 지원하지 않는다. 
    logTextL({length: 10});   //interface로 정의된 객체 정의 호툴 가능  




  // 제네릭의 타입 제한 3 - keyof
  interface ShoppingItem {
    name : string;
    price: number;
    stock : number;
  }
  function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T { 
    //제네릭의 타입 범위줄이기 
    return itemOption;
  }
  getShoppingItemOption(10);
  getShoppingItemOption(true);
  getShoppingItemOption<string>('hahaha');

  getShoppingItemOption('name'); // 이미 정의되있는 타입의 키값들만 적용가능 
  getShoppingItemOption('price'); // 이미 정의되있는 타입의 키값들만 적용가능 
  getShoppingItemOption('stock'); // 이미 정의되있는 타입의 키값들만 적용가능 


