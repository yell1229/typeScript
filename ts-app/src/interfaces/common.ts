// type폴더 안의 interface는 호출이 되지 않는다. 폴더이름 확인.
/*
    MenuList interface
*/

// MenuList
export interface Menu{
    name : string;
    emoji: string;
}
export interface MenuPrice extends Menu{
    price?: number;
}
export interface MenuSource extends Menu{
    source?: string;
}

// Employee
export interface Employee {
    name: string;
    age: number;
    department : string;
}
export interface EmployeeEmoji extends Employee{
    emoji: string;
}

// LunchList
export interface Food {
    name :string;
    emoji : string;  
}
export interface FoodPrice extends Food {
    price: number;
}
export interface FoodText extends Food{
    text: string;
}