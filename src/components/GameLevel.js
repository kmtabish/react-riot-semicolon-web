import React, {Component} from 'react';
import './style.scss';

const GameLevel = props => {
    return (
       <div className="game-level-wrapper home-screen-inner-wrap">
            <h2><span>Select Level</span></h2>
            <div className="level-btn-wrap">
                <button className="btn btn--stripe margin-l-r-15" onClick={() => props.selectLevel("S")}>Easy</button>
                <button className="btn btn--stripe margin-l-r-15" onClick={() => props.selectLevel("M")}>Medium</button>
                <button className="btn btn--stripe margin-l-r-15" onClick={() => props.selectLevel("H")}>Hard</button>
            </div>
       </div>
     )
}
export default GameLevel;