import React from 'react';

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

export default Header;