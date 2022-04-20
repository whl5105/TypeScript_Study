enum shoes {
  Nike ,
  Adidas 
}

const myShoes = shoes.Nike; 
console.log(myShoes); // 0 
//이넘 사용시 별도의 값을 지정하지 않으면 기본값은 숫자형 으로 취급한다. 



enum home {
  me = '나나'
}
const myHome = home.me; 
console.log(myHome); // '나나'


//이넘 활용하기 
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer){
  if(answer === Answer.Yes){
    console.log('정답');
  }
  if(answer === Answer.No){
    console.log('오답');
  }
}
// askQuestion('예스');
// askQuestion('y');
// askQuestion('yes');
askQuestion(Answer.Yes);
askQuestion('Y');
askQuestion('Yes');
// 이넘에서 제공되는 값만 넘길 수 있다. 


