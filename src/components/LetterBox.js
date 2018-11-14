import React, {Component} from 'react';
import './style.scss'

const LetterBox = props => {
    return (
        <div className="letter-box" onClick = {(char) => props.onClick(props.letter)}>
            <div className="letter">
                {props.letter}
            </div>
        </div>
     )
}
export default LetterBox;