import PropTypes from 'prop-types';
import React from 'react';

const Menu = props => <div> Hi menu</div>
Menu.propTypes = {
 goHome: PropTypes.func.isRequired
}

Menu.defaultProps = {
 goHome: () => console.log('going home')
}

export default Menu;