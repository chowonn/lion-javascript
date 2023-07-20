/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// const animal = {
//   legs:4,
//   tail:true,
//   stomach:[],
//   set eat(food){
//     this.stomach.push(food); //메소드 이름이 같아도 set, get 역할이 달라서 가능함
//   },
//   get eat(){
//     return this.stomach;
//   }
// }

// const tiger = {
//   pattern: '호랑이무늬',
//   prey: '',
//   hunt(target){
//     this.prey = target;
//     return `${target}에게 조용히 접근한다` 
//   }
// }

// const fox = {
//   prey:'',
// }


// fox.__proto__ = animal; 
// tiger.__proto__ = animal; // 타이거가 에니멀을 부모로 상속받아오겠다

// function User (name,age,email) {
//   this.name = name;
//   this.age = age;
//   this.email = email
// }

// function button(){

// }


// // const a = button()

// const person1 = new User('선범',32,'tiger@naver.com');






// 생성자 함수 

function Animal(){
  this.stomach = [];
  this.legs = 4;
  this.tail = true,
  this.eat = function (food){
    this.stomach.push(food);
  }
  this.printEat = function(food){
    return this.stomach;
  }
}

const tiger = new Animal(); //생성자 함수로 animal 에서 내보낸 값이 tiger 의 객체임

tiger.pattern = '호랑이 무늬';

tiger.hunt = function(target){
  this.prey = target,
  console.log(`${target}에게 접근합니다.`);
}