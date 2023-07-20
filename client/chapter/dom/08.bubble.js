/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */
//버블링이 기본값이고 보통 버블링을 막아야될 때 stopPropagation() 로 막아줌.
// 이벤트 캡쳐링은 뒤에 항목을 true 로 전달하면 이벤트 캡쳐링 => 거꾸로 올라가게됨 (뒤에 이벤트가 먼저 발생해야할 때. 그런 경우가 적음)
const section = getNode('section');
const article= getNode('article');
const p = getNode('p');

section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
},)

article.addEventListener('click',(e)=>{
  e.stopPropagation() 
  console.log('%c article','color:dodgerblue');
})

p.addEventListener('click',(e)=>{
  e.stopPropagation() //너 퍼져나가는거 멈춰!! 버블링 막으려고 이벤트객체의 능력임.
  console.log('%c p','color:hotpink');
}) // 뒤에 항목을 true 로 전달하면 이벤트 캡쳐링  거꾸로 올라가게됨
















/* 캡처링 ----------------------------------------------------------------- */