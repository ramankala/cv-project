const EduInfoOverview = (props) => {
    const { eduArr, editFields, editDisplay } = props;
    return (
        editDisplay
        ?<div>
            <ul>
                {eduArr.map((item, index) => {
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

export default EduInfoOverview;