import React, {Component} from 'react';
import './style.scss';


class HomeScreen extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            email: "",
            uname: ""
          }
        }
    componentWillMount() {
        //Initial call will go here
    }
    render() {
    return (
        <div className="home-screen-inner-wrap">
            <h2>Spell Bound </h2><br></br>
            <h3>Enter your name and email to continue </h3>
            <input type="text" placeholder="ENTER YOUR NAME HERE" onChange={(e)=>this.setState({uname:e.target.value})}/>
            <input type="email" required placeholder="ENTER YOUR EMAIL HERE" onChange={(e)=>this.setState({email:e.target.value})}/>
            <button className="btn btn--stripe" onClick={() => this.props.onClick(this.state)} disabled = {!this.state.email}>Play</button>
        </div>
     )
}
}
export default HomeScreen;