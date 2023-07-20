/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

//Animal => tiger => 호돌이
//set,get 없으면 
class Animal{ //콤마 붙이지 않음 (생략)
  legs = 4;
  tail = true;
  stomach = [];

  
  constructor(name){ // 얘는 클래스를 정의할 때 필수 메서드임. 우리 객체를 생성하고 있는데 생성할 때 뭘 넣어줄건데? 하는 부분이 여기임 ! 
    this.name = name
    console.log('최초 1회 실행');
  }

  set eat(food){ //아래 get과 이름은 중복되지만 하는 일이 다름 (에러x), 보이는건 함수여도 실제 쓰는 건 객체처럼!
    this.stomach.push(food);
  }

  get eat(){ 
    return this.stomach
  }
  
}

class Tiger extends Animal{ //애니멀을 확장시켜서 타이거를 만들겠다

  prey = '';
  constructor(name, pattern){
    super(name)// 부모의 프로퍼티를 가져다 쓰겠다 (저 윗부분 코드를 가져다 쓴다는거임 자바에서 했자나)
    this.pattern = pattern;
  }

  hunt(target){
    this.prey = target; //#을 붙이면 숨김처리됨. 접근이 불가함
    return `${target}에게 조용히 접근한다`
  }

  attack(){
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`
  }

  static sleep(name){ // static 은 클래스를 통해 호출하는 것. 호출 시 => Tiger를 가져와야! 
    console.log(name + '이 잠을잔다');
  }
}

const beom = new Tiger('범');


//const tiger = new Animal('호돌이') // 얘를 실행할거임! 그럼 위의 constructor 부분임.


class Champion {
  q = '';
  w = '';
  d = '';
  f = '';

  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }
  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});