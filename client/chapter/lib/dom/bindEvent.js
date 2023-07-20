function bindEvent(node, type, handler){
  if(typeof node === 'string'){ //문자열이면
    node = getNode(node); //노드 반환
  }
  if( !(/mouseenter|click|mousemove|mouseout|mouseover\b/g).test(type)){//test는 정규표현식 함수
    throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입이어야 합니다. ');
    }
    
   node.addEventListener(type, handler);

  return ()=> node.removeEventListener(type,handler); 

}

//클로저 이고 아래 함수는 18번 줄과 같이 줄여쓸 수 있음
// return() => { 
//   return node.removeEventListener(type,handler);
// }


