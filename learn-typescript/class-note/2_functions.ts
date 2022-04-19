//함수의 파라미터에 타입을 정의하는 방식
function add(a: number,b: number){
  return a+b;
}

//함수의 반환 값에 타입을 정의하는 방식 
function add():number{
  return 20;
}

//함수의 타입을 정의하는 방식 
function add(a: number,b: number):number{
  return a+b;
}
add(10,20); 
add(10,20,30,40); //ts에서는 불필요한 인자를 찾아낸다.(파라미터의 제한 ,엄격한 체크 )

//함수의 옵셔널 파라미터 (추가적인 파라미터 )
function log(a: string,b?: string, c?: string){

}
log('hi');
log('hi','abc');
//필요에따라 인자를 선택적으로 넘길 수 있다. 
