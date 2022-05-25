import '../styles/WorkExperience.css';
const WorkExperience = (props) => {
    const { 
        companyName,
        positionTitle, 
        workDesc, 
        handleCompanyName, 
        handlePositionTitle,
        handleWorkDesc,
        updateWorkFrom,
        updateWorkTo,
        display,
        workBtn} = props;
    return (
        display
        ? <div className="WorkDiv">
            <form onSubmit={workBtn} className="WorkForm">
                <label htmlFor="companyName">Company Name: </label>
                <input onChange={handleCompanyName} type="text" id="companyName" placeholder={companyName} />
                <label htmlFor="positionTitle">Position Title: </label>
                <input onChange={handlePositionTitle} type="text" id="positionTitle" placeholder={positionTitle} />
                <label htmlFor="workDesc">Work Description: </label>
                <input onChange={handleWorkDesc} type="text" id="workDesc" placeholder={workDesc} />
                <label htmlFor="workFrom">Start Date: </label>
                <input onChange={updateWorkFrom} type="date" id="workFrom" />
                <label htmlFor="workTo">End Date:</label>
                <input onChange={updateWorkTo} type="date" id="workTo" />
                <button onClick={workBtn} id="workBtn">Submit</button>
            </form>
        </div>
        : null
    )
}

export default WorkExperience;