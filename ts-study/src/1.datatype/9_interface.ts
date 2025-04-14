// 객체가 생성되려면 body가 있어야한다. 부모 클래스는 단독으로 호출할 일이 없기 때문에... 인터페이스로 만든다.
// 인터페이스 - 클래스 형식의 객체 타입 정의, body 없이 header만 정의, 메모리 생성 불가❌
interface AnimalInterface {
    name: string;
    blood: string;
    color: string;

    sleep():void ;
}

// const at:AnimalInterface = new AnimalInterface(); // 단독으로 객체 생성 불가.

// 인터페이스 상속 시 implements
// 속성과 함수를 모두 반드시 오버라이딩(Overriding) 해야함.
// 오버라이딩은 부모가 가지고 있는 속성과 함수를 그대로 상속받아 구현하는 것을 의미함.
/*
class DogInterface implements AnimalInterface{ 
    blood: string;
    color: string;
    type: string;

    constructor(name: string, blood: string, color: string, type: string){
        // super(name, blood, color); // 부모가 클래스가 아니라 super 사용불가.
        this.name = name;
        this.blood = blood;
        this.color = color;
        this.type = type;
    }
    sleep():void {
        console.log(`${this.name}가 잠을 자요.`);       
    }
}
*/
interface DogInterface extends AnimalInterface{ // DogInterface를 인터페이스 형태로 수정
    type: string;
}

// 구현 클래스 정의
class ImplClass implements DogInterface {
    name: string;
    blood: string;
    color: string;
    type: string;

    constructor(name: string, blood: string, color: string, type: string){
        this.name = name;
        this.blood = blood;
        this.color = color;
        this.type = type;
    }

    sleep():void {
        console.log(`${this.name}가 잠을 자요.`);   
    }
}

const haha:DogInterface = new ImplClass('하하','B','흰색','시츄');
console.log(haha);
