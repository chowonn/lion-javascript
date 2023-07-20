/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

// const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
//   // arguments
//   return moneyA + moneyB + moneyC + moneyD;
// }

// let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// // console.log(resultX);
// // console.log(resultY);
// // console.log(resultZ);


// // 함수 선언 → 화살표 함수 (표현)식   화살표 함수는 arguments를 내장하고 있지 않음. rest parameter
// //                   rest parameter
// let calcAllMoney = (a,b,...args)=>{


//   // console.log( args );


//   // let total = 0;
//   // args.forEach((item)=>{
//   //   total += item;
//   // })

//   // return args.reduce(function(acc,item){
//     // return acc + item;
//   // },0)


//   return args.reduce((acc,item)=> acc + item,0)
  

//   // return total;
// };


// const result = calcAllMoney(1000,500,200,2000);

// // console.log( result );


// function button(){
  
// }


// function Button(){
  
// }

// const a = button()

// const b = new Button()



// // 화살표 함수와 this
// // 일반함수 : 나를 호출한 대상을 this로 바인딩한다.
// // 화살표함수 : this를 바인딩하지 않음. 찾아야한다면 내 부모(상위 컨텍스트, 환경)가져옴. e.currentTarget 
// 부모라는 애가 실행컨텍스트가 없으면 환경 자체가 생성이 안되서 부모라는 것에 해당 x

// // 함수선언문
// function normalFunction(){
//   // console.log(this);
// }

// window.normalFunction()

// // 함수표현식
// const expressionFunction = function (){
//   // console.log(this);
// }


// // 화살표함수식 => 함수로서의 일만 해서 가벼움. this를 바운딩하지 않음. 그래서 부모 것을 가져오는 것이 특징.
// const arrowFunction = ()=>{
//   // console.log(this);
// }

// arrowFunction()


// const user = {

// }

//일반 함수는 나를 호출한 대상으로 바인딩


















/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 



//객체 안에서 this
// 객체의 메서드를 정의할 때는 화살표함수보다 일반 함수가 더 좋다 => this를 더 찾기 쉬움
// 메소드 안에서 함수를 호출할 때는 화살표 함수가 더 좋은가? yes.
//객체의 메서드 => 일반함수.  메서드 안에서 함수를 한 번 더 정의해야할 때 =>화살표함수를 써서 this를 쉽게 찾을 수 있도록 함

const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80,90,100],
  totalGrades:function(){

    this.grades.forEach((item)=>{ //일반함수인데 forEach에 있어서 this를 찾아올 수가 없음 그래서 화살표함수로 
      console.log(this);
      
      // this.total += item;
    })
    console.log( this.total);
   

  }
}