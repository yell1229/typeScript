// enum(enumeration) - 열거형으로 표현되는 데이터를 저장하는 형식
// 정의형식
// const(let) 변수명 {
//      enum item 1, // 인덱스 0
//      enum item 2, // 인덱스 1
//      ....
// }

const objLiteral = {
    name : '홍길동',
    age: 30
};

enum objEnum { // const(let) 적용되면 변수로 인식함. 이터러블(순회) 불가능.
    TypeScript = '타입스크립트', // 0
    JavaScript = '자바스크립트' // 1
};

console.log(objEnum.TypeScript);

// 출력 형식의 차이점
// objLiteral --> for...in 사용❌,Object.key() : [name, age] --> forEach 적용후 출력.(MDN 확인)


const keys = Object.keys(objLiteral);
console.log(keys); // [ 'name', 'age' ]
console.log(`[ forEach ] -----------------------------------------------`);
keys.forEach((key)=>{
    console.log(`${key} : ${objLiteral[key as keyof typeof objLiteral]}`);   
})

// objEnum --> for...in 사용⭕
console.log(`[ objEnum : for in ] --------------------------------------`);

for(const key in objEnum){
    console.log(`${key} : ${objEnum[key as keyof typeof objEnum]}`);   
}
