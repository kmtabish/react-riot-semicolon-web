import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import SpellBox from './SpellBox';
import LetterBox from './LetterBox';
import _ from 'lodash'
const GameHome = props => {
    const quiz = props.data;
    const quizWord = quiz.displayWord.split('')
    const optionsWord = quiz.options.split('*')
    const quizDescription = quiz.description
    const selectedWord = (word) =>{
        if(word == props.data.answerWord){
            props.response(true)
        }
        else{
            props.response(false)
         }
        }
    
    return (
        <div>
       <Link to="/gamelevel" className=" change-level-btn"> <span>Change Level</span></Link>
       <div className="game-mode-wrapper">
            <div className="home-screen-outer-wrap">           
                <div className="home-screen-inner-wrap">
                    <h2>Let's Play </h2>
                    <div className="spelling-box-wrap">
                    {quizWord.map(char =>{
                        if(char == "_"){
                            return <SpellBox empty/>
                        }
                        return <SpellBox letter={char}/>
                    })}
                    </div>
                </div>
                <div className="home-screen-btm-pane relative">
                    <h3>Please select the missing word from the below</h3>
                    <div className="letters-wrap ">
                        {optionsWord.map(char => {
                        return <LetterBox letter={char} onClick={(char) => selectedWord(char)}/>
                        })}
                        </div>
                        <h3>Hint: {quizDescription}</h3>
                    </div>
                </div>
        </div>
        

      </div>
     )
}
export default GameHome;