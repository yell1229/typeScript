/*
타입 별칭 -  객체의 타입을 정의함, 인터페이스와 같은 역할로 사용됨.
단독으로 메모리에 올라갈 수 없다.
*/
type AnimalType = {
    name: string;
    blood:string;
    color:string;
    sleep():void;
}
// 타입을 구현하기 위한 클래스 정의
class typeClass implements AnimalType {
    name: string;
    blood:string;
    color:string;

    constructor(name: string, blood:string, color:string){
        this.name = name;
        this.blood = blood;
        this.color = color;
    }

    sleep():void{
        console.log(`${this.name}가 잠을 자요.`);   
    }
    info():void{
        console.log(`${this.name}가 잠을 자요.`);   
    }
}

// AnimalType 객체 생성
// const haha2:AnimalType = new typeClass('하하','B','브라운');
// haha2.info(); // 타입이 AnimalType 이면 info 접근 못함. 

const haha2:typeClass = new typeClass('하하','B','브라운');
haha2.info(); // info를 가지고 있는건 typeClass라서 타입을 변경해야함.