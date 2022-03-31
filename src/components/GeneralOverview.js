const GeneralOverview = (props) => {
    const { genArr } = props;
    return (
        <div>
            <ul>
                {genArr.map((item, index) => {
                    return (
                        <div>
                            <li key={index}>{item}</li>
                        </div>
                    )
                })}
            </ul>
            <button type="submit">Edit</button>
        </div>
    )
}

export default GeneralOverview;