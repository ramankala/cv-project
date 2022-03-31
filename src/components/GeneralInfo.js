import '../styles/GeneralInfo.css';
const GeneralInfo = (props) => {
    const {
      name,
      email, 
      phoneNo, 
      handleName, 
      handleEmail, 
      handleNumber, 
      generalBtn,
      display, 
    } = props;
    return (
      display
      ? <div className="GeneralInfoDiv">
        <form onSubmit={generalBtn} className="GeneralInfoForm">
          <label htmlFor='nameInput'>Name: </label>
          <input onChange={handleName} type='text' id='nameInput' placeholder={name} />
          <label htmlFor='emailInput'>Email: </label>
          <input onChange={handleEmail} type='text' id='emailInput' placeholder={email}/>
          <label htmlFor='phoneNoInput'>Phone No.: </label>
          <input onChange={handleNumber} type='text' id='phoneNoInput' placeholder={phoneNo} />

          <button type='submit' id="generalBtn">Submit</button>
        </form>
      </div>
      : null
    )
}

export default GeneralInfo;