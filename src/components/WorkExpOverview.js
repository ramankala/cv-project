const WorkExpOverview = (props) => {
    const { workArr } = props;
    return (
        <ul>
            {workArr.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}

export default WorkExpOverview;