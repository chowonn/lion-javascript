/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

//in 문 : 객체 안에 내가 원하는 값(프로퍼티)가 있어? 

const key = 'hasOwnProperty';
// console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

Object.prototype.nickName = 'chowon'; //찐객체에 접근해서 직접적으로 집어 넣은것임. 위에 const javascript가 가진게 아니고 찐 객체가 가진거임.


// 객체 자신의 속성인지 확인하는 방법
// - "자신의(own) 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty(key));




// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

/* for in 문에서 프로퍼티를 가지고 있는지 확인하는 방법보다 hasOwnProperty가 더 정확함. 근데 자꾸 빨간줄이 뜬다
왜..? 프로토타입의 빌트인을 그대로 쓰면 에러가 날 거라고 경고해주는것 . 그 에러는 언제 발생하냐,
hasOwnProperty 는 자바스크립트 언어 자체의 능력 즉, 진짜 객체의 능력을 통해서 쓰고 있는것임.
쟈스는 자유로운 언어로 객체를 만들었는데 메소드로 hasOwnProperty가 작동하지 않음.  hasOwnProperty를 그냥 쓰면 
쟈스안에 객체에 hasOwnProperty를 정의되어면 그 기능을 상실해버리는 원하는 결과값이 안나오는 문제점이 생김.  */

//call()은 능력을 빌려 쓰겠다. 누가 빌려쓸건데? js! key! 

// 진짜 객체의 능력으로 접근하자 !
// console.log(Object.prototype.hasOwnProperty.call(javaScript,key));

for(let key in  javaScript){

  if(({}).hasOwnProperty.call(javaScript,key)){

    console.log(key);
  }
} // Object.prototype 을 ({}) 로 줄여쓸 수 있음.

// - 배열 객체 순환에 사용할 경우?
const tens = [10,100,1000,10000];
for (let key in tens){
  console.log(tens[key]);
}

//for..in 객체를 순환하는 용도로 사용이 가능함 근데 배열은 좀.. 그래.. 특히 순서가 중요한 배열에서는 좋지 않음 
//배열 순환 시에는 for each , for of 가 좋고 for in은 객체 