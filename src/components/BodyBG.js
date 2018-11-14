import React, {Component} from 'react';
import './style.scss'

const BodyBG = props => {
    return (
        <div className={`body-bg-wrap ${props.class}`}>
            <div className="body-bg-left"></div>
            <div className="body-bg-right"></div>
        </div>
     )
}
export default BodyBG;