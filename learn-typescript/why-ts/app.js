// api url
const url = "https://jsonplaceholder.typicode.com/users/1";

// dom
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let address = document.querySelector("#address");

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();

/*
타입스크립트의 장점 
1. 에러 사전방지
- 받아온 데이터의 형상들을 알지 못했을떼 나타날 수  있는 에러들을 화면상에서 확인하기 전 미리 코드상에서 빠른 확인이 가능하다는것 (타입정의의 장점 )

2. 코드 자동완성 
  타입에서 제공되는 api들을 활용 할 수 있다. 

JsDoc 을 이용해서 타입스크립트와 같은 효과를 알아보자 
https://devdocs.io/jsdoc/
//  User 타입 정의 : typedef
// 타입의 프로퍼티 정의 : property

** JsDoc과 @ts-check를 통해서 ts처럼 사용은 가능하나 코드가길어지기 때문에 ts를 사용해서 코드량을 줄이고 가독성이 높아지게 할 수 있다. 









*/
