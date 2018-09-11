interface Human {
  name: string;
  age: number;
  gender: string;
}
//Typescript 에는 인터페이스 개념이 존재한다.
//쉽게 설명하자면, 파라미터로 object 를 받아올때 property 들을 검증하는 스키마 같은 개념이다.

const person = {
  name: "Hudi",
  age: 21,
  gender: "male"
};

//변수 Type 대신 Human 이라는 인터페이스로 파라미터 검증을 한다.
const sayHi = (person: Human): void => {
  console.log(
    `Hello ${person.name}, you are ${person.age} and a ${person.gender}`
  );
};

sayHi(person);

export {};
