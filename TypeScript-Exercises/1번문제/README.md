

## 문제 풀이  
> users 라는 배열속 name,age,occupation 의 객체를 가지고 있기 때문에 User Object 타입을 지정하여 타입 선언을 해주어 해결할 수 있었다.



### [problem](https://github.com/whl5105/TypeScript_Study/blob/master/TypeScript-Exercises/1%EB%B2%88%EB%AC%B8%EC%A0%9C/problem.ts)
```ts
export type User = unknown;
export const users: unknown[] = [...];
export function logPerson(user: unknown) {...}
```


### [solve](https://github.com/whl5105/TypeScript_Study/blob/master/TypeScript-Exercises/1%EB%B2%88%EB%AC%B8%EC%A0%9C/solve.ts)
```ts
export type User = {
    name:string;
    age:number;
    occupation:string;
};

export const users: User[] = [...];

export function logPerson(user: User) {...}
```