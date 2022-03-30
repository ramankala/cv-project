const WorkExpOverview = (props) => {
    const { workArr } = props;
    return (
        <ul>
            {workArr.map((item) => {
                return <li key={'apple'}>{item}</li>
            })}
        </ul>
    )
}

export default WorkExpOverview;