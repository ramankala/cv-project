const WorkExpOverview = (props) => {
    const { workArr, editFields } = props;
    return (
        <div>
            <ul>
                {workArr.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <button onClick={editFields} type="submit">Edit</button>
        </div>
    )
}

export default WorkExpOverview;