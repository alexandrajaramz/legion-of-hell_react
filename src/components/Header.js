import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return (
            <header className="page__header">
                <h1 className="header__title">Legion of Hell</h1>
                <p className="header__date">Last hacker attack: {this.props.attackDate}</p>
            </header>
        );
    }
}

Header.propTypes = {
    attackDate: PropTypes.string.isRequired
}

export default Header;