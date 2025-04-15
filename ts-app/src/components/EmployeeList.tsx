import React from 'react';
import { Employee, EmployeeEmoji } from '@interfaces/common';

// interface EmployeeListProps{
//     employees:{
//         name: string;
//         age: number;
//         department : string;
//         emoji?: string;
//     }[]
// }

// interface Employee {
//     name: string;
//     age: number;
//     department : string;
//     emoji?: string;
// }

// type EmployeeListProps= {
//     employees: Employee[];
// }


// 3
// interface Employee {
//     name: string;
//     age: number;
//     department : string;
// }
// interface EmployeeEmoji  extends Employee{
//     emoji: string;
// }

type EmployeeListProps= {
    employees: (Employee | EmployeeEmoji)[];
}

const EmployeeList:React.FC<EmployeeListProps> = ({employees}) => {
    return (
        <div>
            <ul>
                {
                    employees.map((employee =>(
                        <li>{employee.name},
                            {employee.age},
                            {employee.department}
                            {'emoji' in employee && `, ${employee.emoji}`}
                        </li>
                    )))
                }
                
            </ul>
        </div>
    );
}

export default EmployeeList;



