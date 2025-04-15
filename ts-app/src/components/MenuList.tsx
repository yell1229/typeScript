import React from 'react';
import { Menu, MenuPrice, MenuSource } from '@interfaces/common';

// 1. 넘어오는 props 타입을 체크!!(컴포넌트에 넘어가기 전에 체크.) - interface, type
// 프로퍼티와 데이터타입이 동일
// interface MenuListProps {
//     menus:{
//         name : string;
//         emoji: string;
//         price?: number; // optional
//         source?: string;
//     }[]
// }

// 2. 넘어오는 props 타입을 체크!! : interface + type -> 객체 재사용성을 높이는 방법
// interface Menu{
//     name : string;
//     emoji: string;
//     price?: number;
//     source?: string;
// }

// type MenuListProps = {
//     menus : Menu[];
// }

// 3. 넘어오는 props 타입을 체크!! : interface(부모,자식 관계도출) + type
// interface Menu{
//     name : string;
//     emoji: string;
// }

// interface MenuPrice extends Menu{
//     price?: number;
// }

// interface MenuSource extends Menu{
//     source?: string;
// }
type MenuListProps = {
    menus : (Menu | MenuPrice | MenuSource)[];
}

// 4. interface 또는 typeAlias를 별도의 파일로 저장 후 import해서 사용함.
// tsconfig.json파일에 저장된 파일의 경로를 path와 별칭으로 추가한 후 import

const MenuList:React.FC<MenuListProps> = ({menus}) => {
    return (
        <div>
            <h2>MenuList</h2>
            <ul>
                {
                    menus.map((menu) => (  
                        <li>{menu.name},
                            {menu.emoji},
                            {/* {'price' in menu && menu.price}
                            {'source' in menu && menu.source}, */}
                            {/* 삼항연산자 */}
                            {'price' in menu? menu.price : 'source' in menu? menu.source : ''}
                        </li>
                    ))
                }

            </ul>
        </div>
    );
}

export default MenuList;



