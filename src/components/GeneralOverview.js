const GeneralOverview = (props) => {
    const { genArr } = props;
    return (
        <ul>
            {genArr.map((item) => {
                return <li key={'test'}>{item}</li>
            })}
        </ul>
    )
}

export default GeneralOverview;