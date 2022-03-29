
const GeneralInfo = (props) => {
    const {name, email, phoneNo, handleName, handleEmail, handleNumber } = props;
    return (
        <div>
        <form>
          <h2>General Info</h2>
          <label htmlFor='nameInput'>Name:</label>
          <input onChange={handleName} type='text' id='nameInput' value={name} />
          <label htmlFor='emailInput'>Email:</label>
          <input onChange={handleEmail} type='text' id='emailInput' value={email}/>
          <label htmlFor='phoneNoInput'>Phone No.:</label>
          <input onChange={handleNumber} type='text' id='phoneNoInput' value={phoneNo} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
}

export default GeneralInfo;