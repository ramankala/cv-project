const GeneralOverview = (props) => {
    const { genArr, editFields } = props;
    return (
        <div>
            <ul>
                {genArr.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <button onClick={editFields} type="submit">Edit</button>
        </div>
    )
}

export default GeneralOverview;