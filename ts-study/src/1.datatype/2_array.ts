// ts 배열 형식
// cont(let) 배열변수명:타입정의[] = []; // 힙에 생성되는 배열의 타입[배열의타입]
// cont(let) 배열변수명:Array<타입정의> = new Array(); // Array클래스타입 <제너릭>
// 터미널: npx ts-node .\2_array.ts

// 1~5 5개의 숫자를 저장하는 배열 생성
let num1:number[] = [1,2,3,4,5]; 
const num2: Array<number> = [1,2,3,4,5]; // 메모리에 객체생성 new 
const num3: Array<number> = new Array(1,2,3,4,5);

console.log(num1[0]);
console.log(num2[0]);

// 배열의 메소드:forEach, for... in, for... of, map ...

num1.forEach(num => {
    console.log('forEach num1 -->',num);
});
num2.forEach(num => {
    console.log('forEach num2 -->',num);
})

// for...of
for(const n of num1){ // 있는 타입을 가져다 사용하기 때문에 타입지정을 하지 않는다.
    console.log('for...of',n);   
}