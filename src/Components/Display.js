import React from 'react';


function Display(props){
    return(
        <div>
            <h1>Player At</h1>
            <h3>Ball</h3>
            <h4>{props.ball}</h4>
            <h3>Strikes</h3>
            <h4>{props.strike}</h4>
        </div>
    );
}

export default Display;