import React from 'react';

const Input = (props) => {
    return(
        <div>
            <input onChange={props.change} value={props.username} type="text"></input>
        </div>
    )
}

export default Input;

