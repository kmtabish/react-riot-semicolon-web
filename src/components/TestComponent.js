import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuComponent from './MenuComponent';

const App = props => {
    return (
         <div className={props.sty}>
            Test Home Screen [/ route]
         </div>
     )
}

App.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

App.defaultProps = {
    label: 'defaultText',
    onClick: () => console.log('default click action')
 }
export default App;