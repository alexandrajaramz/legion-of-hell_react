import React from 'react';
import PropTypes from 'prop-types';

class DataCard extends React.Component {
    render() {
        return (
            <div className="user__info">
                <h2 className="user__info-name">{this.props.name}</h2>
                <p className="user__info-email">{`Email: ${this.props.email}`}</p>
                <ul className="user__info-passwords">
                    {this.props.passwords.map((passwords, pw) => {
                    return (
                        <li className="user__info-password" key={pw}>{passwords}</li>
                    );
                    })}
                </ul>
                <ul className="user__info-bank">
                    <li className="user__info-bank-iban">{`IBAN: ${this.props.bank.iban}`}</li>
                    <li className="user__info-bank-pin">{`Pin: ${this.props.bank.pin}`}</li>
                </ul>
            </div> 
        );
    }
}

DataCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    passwords: PropTypes.arrayOf(PropTypes.string).isRequired,
    bank: PropTypes.objectOf(PropTypes.string).isRequired
}

export default DataCard;