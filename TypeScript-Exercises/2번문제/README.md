## 문제 풀이  
> Union type
> persons 배열의 object는 User 와 Admin 의 객체를 동시에 가지기 위해 타입 확장이 필요하다.
> Person Type 에 Union Type의 | 연산자를 이용하여 User 와 Admin 을 동시에가지는 타입을 생성하여 타입 선언을 변경해 주었다.



### [problem](https://github.com/whl5105/TypeScript_Study/blob/master/TypeScript-Exercises/2번문제/problem.ts)
```ts
export type Person = unknown;
export const persons: User[] /* <- Person[] */ = [...];
export function logPerson(user: User) {...}
```


### [solve](https://github.com/whl5105/TypeScript_Study/blob/master/TypeScript-Exercises/2번문제/solve.ts)
```ts
export type Person = User | Admin;
export const persons: Person[] /* <- Person[] */ = [...];
export function logPerson(user: Person) {...}
```