const GeneralOverview = (props) => {
    const { genArr, editFields, editDisplay } = props;
    return (
        editDisplay
        ?<div>
            <ul>
                {genArr.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <button onClick={editFields} type="submit">Edit</button>
        </div>
        : null
    )
}

export default GeneralOverview;