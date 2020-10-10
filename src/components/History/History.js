import React, { useState } from 'react';
import './History.scss';


function History({ history, deleteItemHandler }) {
    return (
        <div className="History" >
            <h3> HISTORY </h3>
            {
                history.length !== 0 && history.map((item, index) => {
                    return (
                        <div key={index} >
                            <div onClick={(e) => { deleteItemHandler(index, e) }}> x </div>
                            <div></div>
                            <div> {item.transactionText} </div>
                            <div> {item.transactionAmount} </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default History;