/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength:', stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[3];
console.log('extractCharacter:', extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능  
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(8,-1);
console.log('slice: ', slice);

let subString = message.substring(1,3);
console.log('subString: ', subString);

let subStr = message.substr(1,3); //잘 사용하지 않음. 레거시
console.log('subStr: ', subStr);


// 문자열 포함 여부 확인
let indexOf = message.indexOf('p');
console.log('indexOf: ', indexOf); // 반환값 -1은 p 가 없다는 뜻

let lastIndexOf = message.lastIndexOf('m'); //last 는 뒤에서부터 찾지만 순서는 앞에서부터 내보내줌.
console.log('lastIndexOf: ', lastIndexOf); // m 몇번 째에 있어? => 8번째

let includes = message.includes('Less');
console.log('includes: ', includes);

let startsWith = message.startsWith('Less');// 해당 문자를 시작으로 가지고 있니? less 부터 시작해?
console.log('startsWith: ', startsWith);

let endsWith = message.endsWith('more.'); // more로 끝나니?
console.log('endsWith: ', endsWith);


// 공백 잘라내기
let trimLeft = message.trimLeft(); // 문자의 왼쪽 부분만 공백으로 없앰 근데 trinStart() 로 바뀜. 지금 코드는 레거시
let trimRight; // 레거시. trimEnd() 로 바뀜

let str = '   asad   ';


function normalText(string){
  return string.replace(/\s*/g,'')
}
normalText(str)

let trim = str.trim(); // 양쪽 다 공백으로 없앰 단어 기준 이니고 그냥 그런식이야? 라고 물어보고 판단함
console.log('trim :', trim);




// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat :', repeat);



// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase :', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase:', toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}