import React from 'react';
import { Food, FoodPrice, FoodText } from '@interfaces/common';

// interface FoodListProps { // 헷갈리기 때문에 type 형태를 선호한다.
//     foodList : (Food | FoodPrice | FoodText)[]
// }

type FoodListProps = {
    foodList : (Food | FoodPrice | FoodText)[]
}

const LunchList:React.FC<FoodListProps> = ({foodList}) => {
    return (
        <div>
            <h1>food</h1>
            <ul>
                {foodList.map(food =>(
                    <li>
                        {food.name},
                        {food.emoji},
                        {'price' in food ? food.price : 'text' in food ? food.text : ''}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LunchList;
