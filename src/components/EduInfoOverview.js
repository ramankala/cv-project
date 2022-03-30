const EduInfoOverview = (props) => {
    const { eduArr } = props;
    return (
        <ul>
            {eduArr.map((item) => {
                return <li key={'apple'}>{item}</li>
            })}
        </ul>
    )
}

export default EduInfoOverview;