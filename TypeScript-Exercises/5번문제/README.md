## 문제 풀이  
>  Utility type
> Partial<Type> 을 사용하여 filterUsers 함수의 criteria 의 property를 optional로 세팅한 Type을 만들어주게 된다면  User의  일부 속성으로만 이루어진 Type을 지정할 수 있다. 



### [problem](https://github.com/whl5105/TypeScript_Study/blob/master/TypeScript-Exercises/5번문제/problem.ts)
```ts
export function filterUsers(persons: Person[], criteria: User): User[] {...}

```


### [solve](https://github.com/whl5105/TypeScript_Study/blob/master/TypeScript-Exercises/5번문제/solve.ts)
```ts
export function filterUsers(persons: Person[], criteria: Partial<User>): User[] {...}
```