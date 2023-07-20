/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()" //html 자체에 이벤트를 거는 것으로 좋은 방법은 아님 하나의 태그에 여러 개의 이벤트를 넣을 수 없음(유지보수) ==> handler() 와 같이 실행 연산자가 필요함
// 2. DOM 프로퍼티 : element.onclick = handler //여러 개의 이벤트를 걸 수가 없음  ==>  handler 과 같이 실행시키지 않아도됨.
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

// const first = getNode('.first');


function handler(){
  // console.log('HTML 속성에서 이벤트 실행합니다.');
  // console.log('DOM 프로퍼티에서 이벤트 실행합니다.');
}
// first.onclick = handler;


// function handleClick(){
//   console.log('이벤트 메서드를 호출한다.');
// }
//click, mouseover, mousemove, mouseout, mousedown, mouseup
// first.addEventListener('click',handleClick); 

// bindEvent('.first', 'click', handler); // 이벤트 생성시켜줌

// setTimeout(()=>{
  // first.removeEventListener('click',handleClick); 

// },3000);

//이벤트 객체(event object)
//이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만든다. => (event) 
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달한다.

const ground = getNode('.ground');
const ball = getNode('#ball');


//throttle , debounce

function handleClick(e){
  
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`; //공 커서 위치가 가운데로

}


function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}


function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}


ground.addEventListener('click',handleClick); // handleClick() 이렇게 하면 클릭하기도 전에 실행됨. 주의


// throttle debounce

ground.addEventListener('mousemove',debounce((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `

  insertLast(ground,template)
}));














