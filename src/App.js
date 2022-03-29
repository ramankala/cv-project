import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
class App extends Component {
  constructor () {
    super();

    this.state = {
      name : 'Enter full name',
      email : 'Enter e-mail',
      phoneNo: '(xxx)-xxx-xxxx',
    };
  }
  handleNameChange = (e) => {
    this.setState({
      name : e.target.value,
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handleNumberChange = (e) => {
    this.setState({
      phoneNo: e.target.value,
    });
  }

  render() {
    const { name, email, phoneNo } = this.state;
    return (
      <div>
        {/* <form>
          <h2>General Info</h2>
          <label htmlFor='nameInput'>Name:</label>
          <input onChange={this.handleNameChange} type='text' id='nameInput' value={this.state.name} />
          <label htmlFor='emailInput'>Email:</label>
          <input onChange={this.handleEmailChange} type='text' id='emailInput' value={this.state.email}/>
          <label htmlFor='phoneNoInput'>Phone No.:</label>
          <input onChange={this.handleNumberChange} type='text' id='phoneNoInput' value={this.state.phoneNo} />
          <button type='submit'>Submit</button>
        </form> */}
        <GeneralInfo 
          name={name} 
          email={email}
          phoneNo={phoneNo} 
          handleName={this.handleNameChange.bind(this)}
          handleEmail={this.handleEmailChange.bind(this)}
          handleNumber={this.handleNumberChange.bind(this)}
          />
      </div>
    )
  }

}

export default App;
