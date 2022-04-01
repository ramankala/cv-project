const WorkExpOverview = (props) => {
    const { workArr, editFields, editDisplay } = props;
    return (
        editDisplay
        ?<div className="workExperienceUI">
            <ul>
                {workArr.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <button onClick={editFields} type="submit" className="workEditBtn">Edit</button>
        </div>
        : null
    )
}

export default WorkExpOverview;