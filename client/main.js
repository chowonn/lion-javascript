

// 모듈 프로그래밍 => js의 어려운 문법은 아니고 방법론임

//hetNode 가져오기

import { getNode, clearContents, insertLast } from './lib/index.js';


const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

// [page -1]
function handleInput(){
// 1. input value 값 가져오기
  let firstValue = +first.value;
  let secondValue = second.value / 1;   // +   , /1 이거 다 암시적 숫자 변환임! Number()은 명시적
  // 2. 두 수의 합 더하기 
  let total = firstValue + secondValue;


// 기존 값 지우기, 마지막에 넣기
  clearContents(result);
  insertLast(result,total);
  

  
}

// [page-2]
// clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요


// 1. clear 버튼을 가져온다. 돔에 접근해서 가져와야 하니까 겟노드 사용 
const clear = getNode('#clear');

function handleClear(){

  // 3. firstValue값 가져왔으니 지운다.
  clearContents(first)

 // 4. secondValue값을 지운다.           clearContents(first); 쓰는거랑 firstValue = "" 로 지워주는거랑 차이가 없음. 그냥 만든 함수 쓰려고 한것.

  clearContents(second)

 // 5. result의 값을 지운다.
  clearContents(result)

 // 6. result에 - 값을 넣는다.
  result.textContent = '-'


}


// 2. clear 버튼에 이벤트 핸들러를 연결한다.
clear.addEventListener('click',handleClear);
first.addEventListener('input',handleInput);
second.addEventListener('input',handleInput);




// 3. 화면 출력하기
first.addEventListener('input',handleInput)
second.addEventListener('input',handleInput)













// function page2(){


//   const calculator = getNode('.calculator');
//   const clear = getNode('#clear');
//   const result = getNode('.result');
//   const numberInputs = Array.from(
//     getNodes('input:not(#clear)')
//   )
  
//   console.log( numberInputs );
  
  
//   function handleInput(){
    
//     const total = numberInputs.reduce((total,input)=> total + Number(input.value),0)
  
  
//     console.log(  );
  
//     clearContents(result);
//     insertLast(result,total);
    
//   }
  
//   function handleClick(){
  
  
//     numberInputs.forEach(clearContents);
//     result.textContent = '-'
//   }
  
//   calculator.addEventListener('input',handleInput);
//   clear.addEventListener('click',handleClick);
  
//   // [page-3]
//   // 위 내용을 이벤트 위임으로 변경 
//   // .calculator 이벤트 input 
  
  
//   }