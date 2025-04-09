// any 타입은 타입을 제한하지 않고, 동적으로 값을 입력받을 수 있다.

let obj:any = {x:100}; // 객체타입
console.log(typeof(obj)); // object
obj = 200; // 프리미티브타입
console.log(typeof(obj));
obj = 'Object'; // number
console.log(typeof(obj)); // string