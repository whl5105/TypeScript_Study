// function logMessage(value: string){
//   console.log(value);
// }
// logMessage('hihi');
// logMessage(100);

let suinType : string | number | boolean;

function logMessage(value: string | number){
  if(typeof value === 'number'){
    value.toLocaleString();
  }
  if(typeof value === 'string'){
    value.toString();
  }
  throw new TypeError('value must be string or number')
}
logMessage('hihi');
logMessage(100);

//유니온 타입이 장점 
//특정 변수나 파라미터에 다양항 타입지정이 가능 