import '../styles/EducationInfo.css';
const EducationInfo = (props) => {
    const { 
        schoolName,
        studyTitle, 
        handleSchool, 
        handleTitle,
        updateStudyFrom,
        updateStudyTo, 
        eduBtn, 
        display } = props;
    return (
        display
        ? <div className="EducationDiv">
            <form onSubmit={eduBtn} className="EducationForm">
                <label htmlFor="schoolNameInput">School Name: </label>
                <input onChange={handleSchool} type="text" id="schoolNameInput" placeholder={schoolName} />
                <label htmlFor="studyInput">Title of Study: </label>
                <input onChange={handleTitle} type="text" id="studyInput" placeholder={studyTitle} />
                <label htmlFor="dateFrom">Date of Study: </label>
                <input onChange={updateStudyFrom} type="date" id="dateFrom" />
                <label htmlFor="dateTo">To: </label>
                <input onChange={updateStudyTo} type="date" id="dateTo" />
                <button onClick={eduBtn} id="educationBtn">Submit</button>
            </form>
        </div>
        : null
    )
}

export default EducationInfo;