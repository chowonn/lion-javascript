/* -------------------- */
/* DOM Styling          */
/* -------------------- */

// const { Value } = require("sass");


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

console.log(first.className); //getter
// console.log(first.className = 'box'); //setter 

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

//add
//remove
//toggle
//contains


first.classList.add('hello'); // 기존의 클래스 남겨두고 새로운 클래스 만들어줌 
first.classList.remove('hello'); // 리무브로 아무런 값도 전달하지 않으면 아무일도 없고, 빈 문자나 공백을 전달하면 에러가 난다. 
first.classList.toggle('is--active'); // 토글 클래스는 불린 값을 반환한다. 
console.log(first.classList.contains('is--active')); //조건문에서 많이 쓴다


function addClass(node,className){

  if(typeof node == 'string') node = getNode(node);

  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수 두 번째 인수는 문자 타입이어야 합니다.');
  }
  node.classList.add(className); //클래스 추가 하는 세팅만 하면 되니까 리턴은 필요없다.
  
}

addClass('.first', 'hello');




/* 스타일 변경 방법 --------------------------------------------------------- */

// 계산되기 이전에 값을 가져오기 때문에 빈 문자열을 반환하게 되서 게터는 불가.
first.style.backgroundColor = 'orange'; //setter
// console.log(first.style.backgroundColor); //getter
//50번 째줄에서 css에서 지정한 걸 가져오려고 하면 조회가 안됨. 49번째 내용이 있기 때문에 조회가 되는 것임.


// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// getComputedStyle(first) 여기서 계산이 완료된 값을 가져오므로 아래 코드들은 게터의 역할이 가능함.
console.log(getComputedStyle(first).fontSize); //아래랑 같은 결과
console.log(getComputedStyle(first).getPropertyValue('fontSize')); //객체의 메소드를 다시 호출하는 것으로 좀 더 명시적임.

// 객체의 속성에 접근할 때 . 표기법은 사용할 수 없다.
// computed property [ ]

setCss('.first', 'color', 'pink');