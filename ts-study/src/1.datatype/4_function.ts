/* https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html

    기본함수 선언:
    function 함수명(파라미터: 파라미터 타입):반환값 타입 { 
        실행로직 
        return 반환값;
    }
*/

// greet1('홍길동')--> 화면출력: 반갑습니다. 홍길동님!!
function greet1(name:string){
    console.log(`반갑습니다. ${name}님!!`); 
}
greet1('홍길동');

// greet2('홍길동',30)--> 화면출력: 홍길동의 나이는 30 입니다.
function greet2(name:string,age:number): string{
    return `${name}의 나이는 ${age} 입니다.`; 
}
const str:string = greet2('홍길동',30);

console.log('function',greet2('홍길동',30));
console.log('str',str);

// greet3('Alice','서울시 강남구') : 화살표 함수를 통해 함수 표현식으로 생성
// 화면출력: 이름-Alice, 주소-서울시 강남구
// age 나이를 입력받는 변수 매개변수 추가, 단, 타입은 정해지지 않음.
// age는 필수입력사항이 아닌 선택사항. 변수뒤에? 붙인다.
const greet3 = (name:string, addr:string, age?:any) => {
    (age)? 
        console.log(`이름-${name}, 주소-${addr}, 나이-${age}`)
    :   console.log(`이름-${name}, 주소-${addr}`);
}
greet3('Alice','서울시 강남구');
greet3('Alice','서울시 강남구',40);
greet3('Alice','서울시 강남구', '40');

// greet4(1,2,3,4,5) 값을 입력받아 배열객체로 화면 출력
const greet4 = (...params: any[])  => { // 넘어오는 여러 타입의 파라미터를 받아서 배열에 저장
    console.log(params);
    
}
greet4(1,2,3,4,5);
greet4('❤');