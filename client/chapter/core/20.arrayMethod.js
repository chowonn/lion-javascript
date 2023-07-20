/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// function isArray(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
// }

const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';

function nomalIsArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
}


const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';

function normalIsNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
}




const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]




/* 요소 순환 ---------------------------- */

// forEach : 값을 반환하지 않는다 , 일처리만 하고 끝냄 (중요)
arr.forEach((item,index)=> {
  console.log(item,index);
})

people.forEach((item)=> {
  console.log(item.name);
})
/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse : 기존 배열의 순서를 뒤집음. 원본 손상 0
arr.reverse();
// console.log(arr);


// splice : 배열에 값을 추가하거나 빼기 (맥가이버)
arr.splice(1,3,10,5); //배열의 1번 인덱스부터 아이템 2개를 제거하겠다. 슬라이스랑 헷갈리지 말기 
console.log(arr);

//compare function
// 반환 값 < 0 : a가 b보다 앞에 있어야한다.
// 반환 값 == 0 : a와 b의 순서를 바꾸지 않는다. 
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.
// sort
arr.sort((a,b) => {
  return a-b;
})
console.log(arr);

/* 새로운 배열 반환 ------------------------ */ //원본 파괴하지 않음.
const user = ['선범', '효윤', '준석']; 

// concat
// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'javascript', 'css'];
console.log(newArray);

// slice
const slice =  arr.slice(2,5);
console.log(slice);

// toSorted
const toSorted = arr.toSorted((a,b) =>{
  return b-a;
})
console.log(toSorted);

// toReversed
const toReversed = arr.toReversed();
console.log(toReversed);

// toSpliced
const toSpliced = arr.toSpliced(2,0, 'javascript', 'css', 'react');
console.log(toSpliced);


// map : 반환값이 필요. 그 반환값이 배열로 들어감
// const job = people.map((item,index)=>{
//   return `<div>${item.profession}</div>`
// })

// job.forEach((item)=>{
//   document.body.insertAdjacentHTML('beforeend',item);
// })


// console.log(job);

const job = people.map((item,index)=>{
  return /* html */`
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `
})



job.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
})

/* 요소 포함 여부 확인 ---------------------- */

// indexOf : 값이 없으면 -1 반환
console.log(arr.indexOf(10));

// lastIndexOf : 뒤에서부터 찾고 반환은 앞에서부터! 그래서 위랑 결과값이 같음.
console.log(arr.lastIndexOf(10));

// includes : 포함하고 있니?
console.log(arr.includes(1000));

/* 요소 찾기 ------------------------------ */

// find : 배열 반환이 아닌 해당 아이템 반환  다 나오는 것이 아닌 가장 먼저 나오는 하나를 출력해주는 것. 
const find = people.find((item)=>{
  return item.id > 1;
})
console.log(find);

// findIndex : 객체가 나오는게 아니라 몇번 째 인지 순서만 나옴
const findIndex = people.findIndex((item)=>{
  return item.id ==3
})
console.log(findIndex);


/* 요소 걸러내기 --------------------------- */

// filter : 배열을 반환 
const filter = people.filter((item)=>{
  return item.id > 2
})


console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// 초기값을 지정해주지 않으면 people의 arr에 첫번째 객체가 와서 문자에 숫자를 접합하게 된다. [object Object]40305218
// 초기값(arr)을 0으로 지정해주면 0에다가 숫자를 더하게 된다.
const totalAge = people.reduce((acc,cur)=>{
  return acc + cur.age;
},0)
// console.log(totalAge);

const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');


document.body.insertAdjacentHTML('beforeend',template);

// reduceRight : 위의 거랑 순서만 바뀌는거 
/* string ←→ array 변환 ------------------ */
const str = '예나 윤진 시연 진만 정아 봉석'

// split : 문자 => 배열
const stringToArray =  str.split(' '); //공백주의하기
console.log(stringToArray); 

// join
