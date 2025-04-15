import React, { useEffect, useState } from 'react';
import './App.css';
import MenuList from './components/MenuList';
import EmployeeList from './components/EmployeeList';
import LunchList from 'components/LunchList';
import axios from 'axios';

function App() {

const [menus, setMenus] = useState([]);
const [employees, setEmployees] = useState([]);
const [foodList, setFoodList] = useState([]);

useEffect(() => {
    axios
    .get('data/ts.json')
    .then((res) => {
        setMenus(res.data.menus);
        setEmployees(res.data.employees);
        setFoodList(res.data.foodList)
    })
    .catch(err => console.log(err));

},[]);

return (
    <div className="App">
    <h1>type script</h1><hr />
    <MenuList menus={menus} /><hr />
    <EmployeeList employees={employees} /><hr />
    <LunchList foodList={foodList} />
    </div>
);
}

export default App;
