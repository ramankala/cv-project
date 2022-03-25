
const GeneralInfo = (props) => {

    return (
        <div>
        <form>
          <h2>General Info</h2>
          <label htmlFor='nameInput'>Name:</label>
          <input onChange={this.handleNameChange} type='text' id='nameInput' value={this.state.name} />
          <label htmlFor='emailInput'>Email:</label>
          <input onChange={this.handleEmailChange} type='text' id='emailInput' value={this.state.email}/>
          <label htmlFor='phoneNoInput'>Phone No.:</label>
          <input onChange={this.handleNumberChange} type='text' id='phoneNoInput' value={this.state.phoneNo} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
}

export default GeneralInfo;