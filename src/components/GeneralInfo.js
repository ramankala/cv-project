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
      ? <div>
        <form onSubmit={generalBtn}>
          <h2>General Info</h2>
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