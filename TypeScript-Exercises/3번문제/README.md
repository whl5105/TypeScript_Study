## 문제 풀이  
> literal type guard 
> User | Admin 두 타입을 참조하는 Person Type 에서의 객체 조건을 찾을 경우 javascript in 연산자를 사용하여 객체 변수의 유형을 좁히는 방법으로 판별했다.
> "role" 이라는 특정 객체가 참조하는지를 판별하여 true또는false을 반환하게된다.




### [problem](https://github.com/whl5105/TypeScript_Study/blob/master/TypeScript-Exercises/3번문제/problem.ts)
```ts
export function logPerson(person: Person) {
  let additionalInformation: string;
  if (person.role) {
      additionalInformation = person.role;
  } else {
      additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
```


### [solve](https://github.com/whl5105/TypeScript_Study/blob/master/TypeScript-Exercises/3번문제/solve.ts)
```ts
export function logPerson(person: Person) {
    let additionalInformation: string;
    if('role' in person) additionalInformation = person.role;
     else  additionalInformation = person.occupation;
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
```