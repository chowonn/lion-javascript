/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값   값을 비워둘 때는 null
const empty = null;
console.log(empty);

// 2. 값이 할당되지 않은 상태  const x    최초값이 할당되지 않았을 때 undefined
let unknown;
console.log(unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const hi = new String('hello'); // 문자 생성자   (생성자를 통해 만드는 것은 선호되지는 않음 잘 안씀)

const dd = 'hello' // 문자 리터럴 (리터럴 방식을 쓰자)

const double = "hello"; // 큰
const single = 'hello'; //작은
const backtick = `hello ${1+6}`; //역

console.log(typeof double);


// 4. 정수, 부동 소수점 숫자(길이 제약)
const numeber = new Number(123); //숫자 생성자 (귀찮아서 잘 안씀 아래 방식처럼 주로 사용함 )

const integet = 123;
const floatingPointNumber = 10.45;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const big = BigInt(1235);

const bigInteger = 123n

// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;
console.log(typeof (bool));

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const Obj = new Object({});

const obj = {}

console.log(obj);

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uid');

console.log(typeof unique);



/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log(typeof (1+2));

// 언어 상, 오류




// Object

const user = {
  name: 'tiger',
  age: 28,
  sayHi: function(){
    console.log('hello');
  }
} 

console.log( user.sayHi());

// Array

const arr = [10, 100, 200, 2, 6, 7];

const count =0;
`li:nth-child(${count + 1})`

console.log(arr);
console.log(arr[2]);

// function
function fishbreadFrame(재료){
  return 재료 + `맛 붕어빵`;
}

const 붕어빵 = fishbreadFrame('팥');

console.log(팥);
// this


