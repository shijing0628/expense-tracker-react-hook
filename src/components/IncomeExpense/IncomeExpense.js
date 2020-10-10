import React,  {useState} from 'react';
import './IncomeExpense.scss';


function IncomeExpense({income, expense}) {
    return ( 
    <div className = "IncomeExpense" >
        <div>
            <h5>INCOME</h5> 
            <p>${income}</p>
        </div>
        <div>
            <h5>Expense</h5> 
            <p>${expense}</p>
        </div>
    </div>
    );
}

export default IncomeExpense;