// interface Persons{
//   name: string;
//   age: number;
// }


type Persons = {
  name: string;
  age: number;
}

const suin: Persons ={
  name: '수인',
  age:28
}

type MyString = string;
const myname: MyString = 'suin';

/*
  type vs interface 차이 
  - 타입 별칭: 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같습니다. 
  이러한 특징은 VSCode 상의 프리뷰 상태로 다른 타입과 어떤 차이점이 있는지 확인해볼 수 있습니다.
  - 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부
  - 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능합니다. 따라서, 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천
*/