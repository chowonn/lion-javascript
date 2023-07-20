/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = MORNING;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
switch (thisTime) {
  case MORNING: console.log('주믈 켠다'); break;
  case LUNCH:console.log('밥먹는 시간을 쪼개서 복습을 한다.'); break;
  case DINNER:console.log('저녁을 먹지 않고 복습을 한다.'); break;
  case NIGHT:console.log('유튜브를 보지 않고 이듬 영상강의 하나를 더 본다'); break;
  case LATE_NIGHT:
  case DAWN:console.log('잠을 자면서 다음 수업 내용을 꿈꾼다.'); break;
  default:
    break;
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

switch (thisTime) {
  case MORNING: console.log('주믈 켠다'); break;
  case LUNCH:console.log('밥먹는 시간을 쪼개서 복습을 한다.'); break;
  case DINNER:console.log('저녁을 먹지 않고 복습을 한다.'); break;
  case NIGHT:console.log('유튜브를 보지 않고 이듬 영상강의 하나를 더 본다'); break;
  case LATE_NIGHT:
  case DAWN:console.log('잠을 자면서 다음 수업 내용을 꿈꾼다.'); break;
}

if(thisTime == MORNING){
  console.log('주믈 켠다');
} else if(thisTime == LUNCH){
  console.log('밥먹는 시간을 쪼개서 복습을 한다.');
} else if(thisTime == DINNER){
  console.log('저녁을 먹지 않고 복습을 한다'.);
}else if(thisTime == LATE_NIGHT || thisTime == DAWN){
  console.log('자면서 다음 수업 내용을 꿈꾼다'.);
}



/* switch vs. if -------------------------------------------------------- */

