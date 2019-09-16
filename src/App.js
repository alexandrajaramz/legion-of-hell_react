import React from 'react';
import './App.css';
import userData from './userData';
import Page from './components/Page';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: userData,
      inputValue: ''
    }

    this.getInputValue = this.getInputValue.bind(this);
  }

  getInputValue (event) {
    const targetValue = event.currentTarget.value; 
    this.setState ({
      inputValue: targetValue
    })
  }

  render() {
    return (
      <Page 
        userData={this.state.userData}
        getInputValue={this.getInputValue} 
        inputValue={this.state.inputValue}
      />
    );
  }
}

export default App;
