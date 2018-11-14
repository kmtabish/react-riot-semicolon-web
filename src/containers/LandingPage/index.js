import { connect } from 'react-redux';
import React, {Component} from 'react';
import HomeScreen from '../../components/HomeScreen';
import BodyBG from '../../components/BodyBG';
import {createUser} from './action'
import { withRouter } from 'react-router'
import UILoader from '../../components/UILoader';
import './style.scss';

class Home extends Component {
    
    constructor(props,context){
        super(props,context);
        this.state = {
            gameMode: false,
            showLoader: false
          }
        }
 
    
    onButtonClick = (payload) =>{
        this.setState({showLoader: true})
        this.props.dispatch(createUser(payload, ()=>{
                this.props.history.push({pathname: "/gameLevel"})
                this.setState({showLoader: false})
        }));
    }

    static getDerivedStateFromProps(nextProps){
        if(localStorage.getItem('token')){
            nextProps.history.push({pathname: "/gameLevel"})
        }
    }
    render() {
        return (
                <div>
                    {this.state.showLoader && <UILoader/>}
                    <BodyBG class={`${this.state.gameMode ? 'game-active' : ''}`}/>
                    {!this.state.gameMode && <HomeScreen label={this.props.buttonText} 
                        onClick={(payload) => this.onButtonClick(payload)}
                    />}
                </div>
            )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

}

const mapStateToProps = (state, ownProps) => {
    return {
     user: state.user
    }
}
const App = connect(
    mapStateToProps
)(Home)
export default withRouter(App);