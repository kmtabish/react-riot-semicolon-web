import { connect } from 'react-redux';
import React, {Component} from 'react';
import BodyBG from '../../components/BodyBG';
import Modal from '../../components/Modal';
import {getGame} from './action'
import GameHome from '../../components/GameHome';
import UILoader from '../../components/UILoader';
import './style.scss';

class GameHomeScreen extends Component {   
    constructor(props,context){
        super(props,context);
        this.state = {
            gameMode: false,
            showModal: false,
            nextQus: 0,
            score: 0,
            highScore: localStorage.getItem('highScore') ? localStorage.getItem('highScore'): 0,
            showLoader: true
          }
        }
    
   componentWillMount() {
        const stage = _.get(this.props.history.location, 'state.stage')
        this.props.dispatch(getGame(()=>{
            this.setState({showLoader: false})
        }, !stage ? 'S' : stage))
    }
    
    onButtonClick = () =>{
        this.setState({
            gameMode: true
        })
    }
    
    response = (status) => {
        this.setState({showModal: status})
    }

    modalClose = (status) =>{
        const quiz =  _.get(this.props.quiz, 'quiz');
        console.log(this.state.nextQus,quiz.length-1)
        if(this.state.nextQus<quiz.length-1){
            this.setState({showModal: status, nextQus: this.state.nextQus + 1, score: this.state.score + 5}, () =>{
                if(localStorage.getItem("highScore")){
                    if(localStorage.getItem("highScore") < this.state.score){
                        localStorage.setItem("highScore", this.state.score)
                        this.setState({highScore: this.state.score})
                    }
                }else{
                        localStorage.setItem("highScore", this.state.score)
                }
            })
        }else{
            this.props.history.push({pathname: "/gameLevel"})
        }
        
    }

    render() {
        const quiz =  _.get(this.props.quiz, 'quiz');
        return (
            <div>
                {this.state.showLoader && <UILoader />}
                {quiz.length && <div>
                    {this.state.showModal && <Modal close={()=> this.modalClose(false)}/>}
                    <BodyBG class="game-active"/>
                     <div>
                        <div className="score-board-wrap">
                            <h4>Score</h4>
                            <span className="">
                                {this.state.score}
                            </span>
                        </div>
                        <div className="high-score-board-wrap">
                            <h4>High Score</h4>
                            <span className="">
                                {this.state.highScore}
                            </span>
                        </div>
                    </div>
                   <GameHome label={this.props.buttonText} data={quiz[this.state.nextQus]} response = {(status) => this.response(status)}/>
                   </div>}
                </div>
            )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

}

const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text,
     quiz: state.quiz
    }
}
const App = connect(
    mapStateToProps
)(GameHomeScreen)
export default App;