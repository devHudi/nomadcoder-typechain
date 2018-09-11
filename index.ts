const name = "Cho donghyun",
  age = 21,
  gender = "male";

//파라미터 뒤에 ?을 붙이면 선택적 파라미터가 된다.
//선택적 파라미터가 아닌 파라미터를 생략하게 되면, 에러가 발생하는 것이 일반 자바스크립트와 차이점이다.
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age} and a ${gender}`);
};

sayHi(name, age);

export {};
