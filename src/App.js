import React from 'react';
import './App.css';
import userData from './userData';


class App extends React.Component {
/*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <div className="App">
        <h1 className="app__title">Datos de usuarios</h1>
        <ul className="app__users">
          {userData.map((user, index) => {
            return (
              <li className="user" key={index}>
                <div className="user__info">
                  <h2 className="user__info-name">{user.name}</h2>
                  <p className="user__info-email">{`Email: ${user.email}`}</p>
                  <ul className="user__info-passwords">
                    {user.passwords.map((passwords, pw) => {
                      return (
                        <li className="user__info-password" key={pw}>{passwords}</li>
                      );
                    })}
                  </ul>
                  <ul className="user__info-bank">
                    <li className="user__info-bank-iban">{`IBAN: ${user.bank.iban}`}</li>
                    <li className="user__info-bank-pin">{`Pin: ${user.bank.pin}`}</li>
                  </ul>
                </div>
              </li>
            );
          })}   
        </ul>
      </div>
    );
  }
}

export default App;
