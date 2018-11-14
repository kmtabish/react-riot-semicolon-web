import { connect } from 'react-redux';
import React, {Component} from 'react';
import GameLevel from '../../components/GameLevel';
import BodyBG from '../../components/BodyBG';
import {updateGameLevel} from './action'
import './style.scss';

class GameLevelScreen extends Component {   
    constructor(props,context){
        super(props,context);
        this.state = {
            gameMode: false
          }
        }
    componentWillMount() {
        //Initial call will go here
    }
    
    onButtonClick = (L) =>{
            this.props.history.push({pathname:"/gameHome", state:{stage: L}})
    }
    render() {
        return (
                <div>
                    <BodyBG/>
                    <GameLevel selectLevel={(L)=>this.onButtonClick(L)}/>
                </div>
            )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

}

const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text
    }
}
const App = connect(
    mapStateToProps
)(GameLevelScreen)
export default App;