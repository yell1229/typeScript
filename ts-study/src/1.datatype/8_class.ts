/*
    타입스크립트의 클래스 타입
    클래스는 객체 타입으로 OOP의 Encapsulation(캡슐화)이 적용된 타입이다.
    클래스간의 상속이 가능하며, 이를 통해 확장성이 높다. 단, 메모리 효율성이 좋지 않다.
    클래스의 실행은 인스턴스를 생성하여 사용되며, new 라는 키워드를 통해 실행된다.

    클래스 정의 형식: 변수 + 함수
    ❗❗ 클래스 정의 전 생성할 클래스에 대한 객체 설계가 반드시 필요함.
    class  클래스명{
        fields(필드명: 변수) 선언
        constructor(생성자) 선언
        function() 선언
    }

    인스턴스 생성 형식 (인스턴트가 생성되어에 메모리에 올라간다.)
    class의 인스턴스이름 = new class의 생성자함수()
    ❗❗ class의 생성자함수는 클래스이름과 동일 
*/

// 객체 설계 : 객체는 실세계를 기준으로 정해지는 구체적인 값을 일반화하여 추상화하는 개념


// 메뉴 클래스 선언
class Menu {
    name:string;
    price: number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
}

// 고객 클래스 선언
class Customer {
    // 필드
    name: string;
    age: number;
    menu: Menu; 
    money: number;

    //constructor
    constructor(name: string, age: number, menu:Menu , money:number){ // Customer()
        this.name = name;
        this.age = age;
        this.menu = menu;
        this.money = money;
        console.log(`--------------------------->> ${this.name}님이 입장.`);
        
    }
    // function(method)
    // order(): void {
        //     console.log(`${this.name}이 ${this.menu.name}을 ${this.menu.price}원을 주고 주문을 한다.`);     
        // }
    addExtraCharge(money:number):void{
        this.money += money;
    }
    receiveOrderMenu(orderMenu:string): void{
        console.log(`--------------------------->> ${this.name}님이 입장.`);

    }
}

// 카페 클래스 선언
class Cafe {
    name: string;
    menus: Menu[];
    orderMenu?: Menu; // 처음 생성할때 있어도 없어도 될 때 ?

    constructor(name:string, menus: Menu[]){
        this.name = name;
        this.menus = menus;
        console.log(`******************************************************`);
        console.log(`\t\t 영업시작`);
        console.log(`******************************************************`);
        this.showMenu();
    }
    showMenu():void{
        console.log(`-----------메뉴 리스트------------------`);
        console.log(`번호\t메뉴명\t메뉴가격`);
        console.log(`-----------------------------`);

        console.log(`-----------------------------`); 
    }

    takeOrder(name:string, orderMenu:Menu, payment:number):boolean{
        this.orderMenu = orderMenu; // 주문이 들어올 때 생성됨.
        //console.log(name, orderMenu, payment);
        let orderCheckResult:boolean = false;
        const omenu = this.menus.some(menu => menu.name === orderMenu.name);
        if(payment >= orderMenu.price){
            console.log(`${this.name} >>> ${name}님 주문이 완료되었습니다. 잠시만 기다려주세요.`);
            this.makeMenu();
            orderCheckResult = true;
        }else{
            console.log(`${this.name} >>> ${name}님 결제금액 부족`);
        }
        return orderCheckResult;
    }

    makeMenu():void{
        console.log(`${this.name} >>> 음료 제주 중`);
        
    }
    getOrderMenu():Menu{
        console.log(`${this.name} >>> ${name}님 음료가 준비되었습니다.`);
        const menuName: string =  this.orderMenu ? this.orderMenu.name : '';
        return  menuName;
    }
}

// 인스턴스(객체) 생성
// 0. 메뉴판 생성
const menuData:{name:string, price:number}[] = [
    {name:'아메리카노' , price:1700},
    {name:'아이스아메리카노' , price:2000},
    {name:'바닐라라떼' , price:3000},
];

const menus:Menu[] = menuData.map(menu =>
    new Menu(menu.name, menu.price)
);// map의 리턴타입[]


// 1. 매가커피 영업 시작 => 메뉴판 추력
const megaCoffee:Cafe = new Cafe('매가커피☕', menus);

// 2. 고객 입장
const customers:{name:string, age:number, menu:Menu, money:number}[] = [
    {name:'부상길',age:40, menu:new Menu(menuData[0],name, menuData[0].price), money:1000},
    {name:'오애순',age:30, menu:new Menu(menuData[1],name, menuData[1].price), money:5000},
    {name:'양관식',age:30, menu:new Menu(menuData[2],name, menuData[2].price), money:4000}
];
const sang:Customer = new Customer('부상길', 40, new Menu('아이스아메리카노',1700) , 1000);

// 3~4. 메뉴 선택 후 주문 : 고객 <====> 카페
let orderFlag = true; // 처음 무조건 실행
while(orderFlag){
    if(megaCoffee.takeOrder(sang.name, sang.menu, sang.money)){
        // 음료 제조 중
        orderFlag = false;
    } else{
        // 결제금액 부족 -> 고객이 추가 지불
        sang.addExtraCharge(1000);
    };
}

// 6. 부상길씨가 받고 퇴장
sang.receiveOrderMenu(megaCoffee.getOrderMenu());


// 인스턴스(= 객체) 생성 ==> 메모리 생성
// const hong:Customer = new Customer('홍길동',32, new Menu('아이스 아메리카노',10) ,100);
// console.log(hong.name);
// console.log(hong.age);
// console.log(hong.menu);
// console.log(hong.money);
// hong.order();
