# typeScript
(TypeScript)[https://ko.wikipedia.org/wiki/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8] 
    - 타입스크립트(TypeScript)는 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어이다. <br>
    -자바스크립트 - 프론트앤드에서 실행되는 스크립트(html 안에서 실행되는..js, ts, php,...)형식의 언어 <br>
    -슈퍼셋 - 기존 언어를 유지하고 포장을 한 상태. 기본적인 구조는 js와 동일.<br>
    -MS(MicroSoft)에서 개발한 스크립트 형식의 언어이다.<br>

## TS 실행 구조
    JS코드작성 ==> 브라우저(V8) 실행(인터프리터)<br><br>

    TS코드작성 ==> 브라우저(V8) 실행(X)<br>
    TS코드작성 --> 컴파일러 --> JS코드생성 ===> 브라우저(V8) 실행(인터프리터)<br>

## 자바스크립트 vs 타입스크립트
- 자바스크립트는 동적(Dynamic) 데이터 타입을 지원한다.
- 타입스크립트는 정적(Static) 데이터 타입을 지원한다.

동적 데이터 타입 예)
```bash
let name = '홍길동';
console.log(name); // 홍길동
name = 'hong';
console.log(name); // hong
name = 100;
console.log(name); // 100
```

정적 데이터 타입 예)
```bash
let name: string = '홍길동';
console.log(name); // 홍길동
name = 'hong';
console.log(name); // hong
name = 100; // 컴파일 에러

```