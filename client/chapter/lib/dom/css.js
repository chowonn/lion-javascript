/* class -------------------------------------------------------------*/
function addClass(node,className){

  if(typeof node == 'string') node = getNode(node);

  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수 두 번째 인수는 문자 타입이어야 합니다.');
  }
  node.classList.add(className); //클래스 추가 하는 세팅만 하면 되니까 리턴은 필요없다. 
}

//removeClass

function removeClass(node, className){
  if(typeof node === 'string') node = getNode(node);
  
  //이 코드가 아래의 코드보다 밑에 있으면 안됌. 스트링이 아닌걸로 판단이 되서 바로 에러가 뜨고 끝이나버릴 것. '' 으로 실행이 되었으면 다시 실행하지 않도록 리턴으로 꼭 끝내줄 것.
  if(!className){ 
    node.className = '';
    return;
  }

  if(typeof className !== 'string'){
    throw new ReferenceError('removeClass 함수 두 번째 인수는 문자 타입이어야 합니다.');
  }

  node.classList.remove(className);
}




//toggleClass

const toggleClass = (node,className) =>{
  if(typeof node == 'string') node = getNode(node);

  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수 두 번째 인수는 문자 타입이어야 합니다.');
  }
  return node.classList.toggle(className); //클래스 추가 하는 세팅만 하면 되니까 리턴은 필요없다. 

}

/* css -------------------------------------------------------------*/

function setCss(node, prop, value){

  if(typeof node == 'string') node = getNode(node);
  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');
  node.style[prop] = value;
}


function getCss(node,prop){
  
  if(typeof node == 'string') node = getNode(node);
  if(!(prop in document.body.style)){
    throw new SyntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  return getComputedStyle(node).getPropertyValue(prop);
}


const css = (node, prop, value) => {
  !value ? getCss(node,prop) : setCss(node,prop,value);
}