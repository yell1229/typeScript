// https://www.typescriptlang.org/docs/handbook/2/objects.html
// 배열(Array) : 동일한 데이터타입을 가진 값들을 물리적으로 연속해서 저장해 놓은 객체, Heap에 저장.
// 튜플(tuple) : 다양한 데이터 타입을 가진 값들을 물리적으로 연속해서 저장, Heap에 저장.
//               index별로 데이터 타입을 정의                                    
// 튜플 정의 형식
// const(let) 변수명: [데이터타입, 데이터타입, ...] = [데이터1, 데이터2, ...];

const numTuple: [number, string, boolean, number] = [1,'hong',true,3];
const numTuple2 = [1,'hong',true,3]; // 타입이 많아서 생략가능

// const [] = 함수명; // 구조분해 할당을 이용하여 인덱스 별로 튜플에 저장함
const [a,b,c,d] = numTuple; // [1,'hong',true,3]

console.log(a,b,c,d);
