/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first'); //돔 탐색해서 가져오기 
console.dir(first.id); //message 
console.dir(first.class); //undefiend  왜?  이미 자바스크립트에는 클래스라는 문법이 있어서 html의 클래스에 접근하기 위해서는 className 에 접근해야 원하는 결과를 얻을 수 있음.
console.dir(first.className); //first



/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함


console.log(first.hasAttribute('size')); // 말 그대로 속성이 있는지에 대한 여부를 확인하는 것으로 비표준이어도 가지고는 있어~ 라며 여부 확인, true,false 반환하니까 ex) 해당 노드에 클래스 속성이 없다면? 넣어주세요 라는 코드를 짜줄 수도 있음
console.log(first.getAttribute('class')); // 속성 값 가져오는 것 속성값은 html , 프로퍼티는 JS 
console.log(first.setAttribute('title', '메세지'));  // 해당 html에 title이라는 속성에 메시지로 설정하겠다.
//console.log(first.setAttribute('class', 'second')); // 기존 클래스가 사라지므로 주의해야함. 그래서 직접 접근하지 않고 add, remove로 많이 처리함.
first.removeAttribute('title'); // title 항목을 지우겠다.
console.log(first.attributes); // first 가 가진 항목을 객체로 반환해줌. 이터레이터가 있으면 ? 순환할 수 있다 ! => for of 사용 가능하다! 


console.log(first.getAttribute('id')); 
first.getAttribute('id'); //message

function getAttr(node,prop){ // first.getAttribute('id'); 와 같이 일일히 적어주지 않고 바로 getattribute 할 수 있게 유틸함수 만드는 것.

  if(typeof node == 'string'){ //node 의 타입이 문자로 들어온다면
    node = getNode(node); // node 에 getNode() 를 사용해줌
    }
  return node.getAttribute(prop) //node 문자라서 에러가 날 것. 그래서 조건처리 필요
   

}
console.log(getAttr('.first','id')); 

// 엘리먼트 노드냐, 문자 노드냐.. 분리할 줄 알아야함


function setAttr(node, prop, value){

  if(typeof node == 'string'){
    node = getNode(node);
  }

  if(typeof prop !== 'string'){
    throw new TypeError('setAttr 함수의 두번 째 인수는 문자 타입이어야 합니다.')
  }
// return node.setAttr(prop,value); // 세팅만하고 따로 값을 반환받을 것은 없기 때문에 return 이 필요 없음.

  if(!node[prop] && prop !== 'class' && prop !== 'title'){
    node.dataset[prop] = value;
    return;
  }

 node.setAttribute(prop,value);

}

setAttr('.first','value','인사멘트');







/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

//속성과 프로퍼티가 일대일로 매칭이 되려면 표준이어야함.
// 비표준일 때 어떻게 안전하게 접근할 수 있을지? 

console.log(first.dataset.size); // 사용자정의 속성을 사용할 때는 data를 붙이고 사용해야하며, 그래야 돔의 프로퍼티로 들어가고 객체로 반환해줌 
console.log(first.dataset.animation = 'paused');// setter
console.log(first.dataset.tabIndex); //getter  언디파인드 나오는데 맞는건가 ? 


//작은 함수로 만들고 이를 재사용하는 것.
//getAttr()
//setAttr()
//value 없으면 getattr() 실행. gatter 이므로 값을 얻어야하니까 리턴이 필요함.  
//value가 있으냐 없느냐에 따라 게터, 세터가 결정됨. 

const arrowAttr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);

function attr(node,prop,value){

  // if(!value){
  //   return getAttr(node,prop);
  // }else{
  //   setAttr(node,prop,value);
  // }

  return !value ? getAttr(node,prop) : setAttr(node,prop,value); //세터에서 언디파인드 나와도 어차피 세팅만 하고 끝나면 되니까 괜찮음 
}