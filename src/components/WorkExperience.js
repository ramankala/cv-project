const WorkExperience = (props) => {
    const { 
        companyName,
        positionTitle, 
        workDesc, 
        handleCompanyName, 
        handlePositionTitle,
        handleWorkDesc,
        workBtn} = props;
    return (
        <div>
            <form>
                <h2>Work Experience</h2>
                <label htmlFor="companyName">Company Name: </label>
                <input onChange={handleCompanyName} type="text" id="companyName" placeholder={companyName} />
                <label htmlFor="positionTitle">Position Title: </label>
                <input onChange={handlePositionTitle} type="text" id="positionTitle" placeholder={positionTitle} />
                <label htmlFor="workDesc">Work Description: </label>
                <input onChange={handleWorkDesc} type="text" id="workDesc" placeholder={workDesc} />
                <label htmlFor="workFrom">Start Date: </label>
                <input type="date" id="workFrom" />
                <label htmlFor="workTo">End Date:</label>
                <input type="date" id="workTo" />
                <button onClick={workBtn} type="submit" id="workBtn">Submit</button>
            </form>
        </div>
    )
}

export default WorkExperience;