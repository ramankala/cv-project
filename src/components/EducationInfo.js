import '../styles/EducationInfo.css';
const EducationInfo = (props) => {
    const { schoolName, studyTitle, handleSchool, handleTitle, eduBtn, display } = props;
    return (
        display
        ? <div className="EducationDiv">
            <form onSubmit={eduBtn} className="EducationForm">
                <label htmlFor="schoolNameInput">School Name: </label>
                <input onChange={handleSchool} type="text" id="schoolNameInput" placeholder={schoolName} />
                <label htmlFor="studyInput">Title of Study: </label>
                <input onChange={handleTitle} type="text" id="studyInput" placeholder={studyTitle} />
                <label htmlFor="dateFrom">Date of Study: </label>
                <input type="date" id="dateFrom" />
                <label htmlFor="dateTo">To: </label>
                <input type="date" id="dateTo" />
                <button type="submit">Submit</button>
            </form>
        </div>
        : null
    )
}

export default EducationInfo;