import React from 'react';
import './App.css';
import Page from './components/Page';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      attackDate: '',
      inputValue: ''
    }

    this.getInputValue = this.getInputValue.bind(this);
  }

  componentDidMount() {
    const endpoint = 'https://raw.githubusercontent.com/Adalab/m3-tutoria-2/master/assets/data/bulk.json';

    fetch(endpoint)
      .then(response => response.json())
      .then(results => {
        this.setState({
          userData: results.data,
          attackDate: results.date
        })
      });
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
        attackDate={this.state.attackDate}
      />
    );
  }
}

export default App;
