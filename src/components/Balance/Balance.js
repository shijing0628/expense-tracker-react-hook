import React from 'react';
import './Balance.scss';



function Balance( {balance}) {
    return ( 
    <div className = "Balance" >
       <h3>YOUR BALANCE</h3>
         <div>${balance}</div>
        </div>
    );
}

export default Balance;