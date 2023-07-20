/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */
// 이벤트가 많아졌을 때 한번에 처리하기 위헤 나의 부모를 찾아서 이벤트를 한번에 걸어서 처리하는것. => 위임


/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */
// 일반함수 일 때 e.currentTarget ===this 와 같다.


const container = getNode('.container');



function handleDelegation (e){
  
  let target = e.target; // 가장 먼저 클릭한 대상을 타켓으로 삼는다.  다양한 애들을 수집해옴. 

  let li = target.closest('li'); // 타켓 안에 자식들 중에 그 자식의 가장 가까운 부모인 li를 찾아라

  
  if(!li) return; // null 이거나 언디파인드면 falsy 한 값이 되서 리턴. 리턴 만나면 함수 종료 되고 아래 코드는 안읽음. 
  
  // console.log(li);
  let className = attr(li, 'class');
  // let dataName = target.dataset.name;
  let dataName = attr(li, 'data-name');

  if(className ==='home'){
    console.log('홈 실행!');
  }

  // console.log(target.closest('li')); //target 으로 가져오면 다른 태그들도 다 잡혀서 내가 선택한 태그에서 가장 인접한 부모를 찾아줘 => closest ( 부모 안의 자식을 찾는게 아닌 자식을 선택했을 때 가장 인접한 부모를 찾는 것!!! )



}

container.addEventListener('click',handleDelegation);