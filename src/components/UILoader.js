import React, {Component} from 'react';
import './style.scss'

const UILoader = props => {
    return (
        <div className="ui-loader-comp">
           <div class="flex">
            <div class="loader">
            </div>
            </div>
            <div class="load-text">
            {/* Loading... */}
            </div>
        </div>
     )
}
export default UILoader;