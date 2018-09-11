const name = "Cho donghyun",
  age = 21,
  gender = "male";

//파라미터 뒤에 : 를 사용하여 타입을 설정할 수 있다.
//함수 파라미터 선언부 뒤에 : 를 사용하여 반환타입을 설정할 수 있다.
const sayHi = (name: string, age: number, gender: string): void => {
  console.log(`Hello ${name}, you are ${age} and a ${gender}`);
};

sayHi(name, age, gender);

export {};
