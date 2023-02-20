## 문제 풀이  
> custom type guard 
> logPerson 함수의 조건문에서 isAdmin 과 isUser 를 호출하여 person.type 을 판별하게 되는데 이때 리턴값에 타입 명제(Type Predicates)를 사용하여 person값을 특정 타입으로 좁혀 주는것으로 문제를 해결했다.

> 조건을 만족하는 경우 true를 반환하고, 통과한 값은 명제를 만족하므로 특정 type을 가지게 된다.



### [problem](https://github.com/whl5105/TypeScript_Study/blob/master/TypeScript-Exercises/4번문제/problem.ts)
```ts
export function isAdmin(person: Person) {
  return person.type === 'admin';
}

export function isUser(person: Person) {
  return person.type === 'user';
}
```


### [solve](https://github.com/whl5105/TypeScript_Study/blob/master/TypeScript-Exercises/4번문제/solve.ts)
```ts
export function isAdmin(person: Person):person is Admin  {
    return person.type === 'admin';
}

export function isUser(person: Person):person is User {
    return person.type === 'user';
}
```