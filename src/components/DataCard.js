import React from 'react';

class DataCard extends React.Component {
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment> 
        );
    }
}

export default DataCard;