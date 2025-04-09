// 타입스크립트의 Primitive 테이터 타입 실습
// 변수정의 : const(let) 변수명: 타입정의 = 값(데이터);

// 정수형 데이터
let number1:number = 100;
number1 = 200;
console.log(number1);

//실수형
let dnumber1:number = 11.234;
dnumber1 = 300;
console.log(dnumber1);

// 불린
let flag:boolean  = false;
const flag2:boolean = !flag;
console.log(flag, flag2);

// 배열 : 문자열타입 - 홍길동, 홍길순, 홍길영
const names:string[] = ['홍길동', '홍길순', '홍길영']; // 객체지정은 타입을 지정.
// const names2:string = ['홍길동']; []은 주소값을 참조하기 때문에 string이 될 수 없다.
console.log(names);


// 초기값 : undefined(원시데이터 초기값) , null(참조, 객체 데이터 초기값, 힙에 주소가 없을 때)
const initName: undefined = undefined;
const initArray: null = null;
console.log(initName, initArray);

// typeof
const x: number = 100;
const xx: string = '100'; 
// console.log('값의 비교', x === xx); 비교가 불가능함.
console.log('타입의 비교', typeof(x) === typeof(xx));
