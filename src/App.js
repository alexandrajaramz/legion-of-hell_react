import React from 'react';
import './App.css';
import userData from './userData';
import Page from './components/Page';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: userData
    }

  }

  render() {
    return (
      <Page 
        userData={this.state.userData}
      />
    );
  }
}

export default App;
