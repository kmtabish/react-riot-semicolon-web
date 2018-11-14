import React, {Component} from 'react';
import './style.scss'

const SpellBox = props => {
    return (
        <div className={`spell-box ${props.empty ? 'empty': ''}`}>
            {props.letter}
        </div>
     )
}
export default SpellBox;