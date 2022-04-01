const EduInfoOverview = (props) => {
    const { eduArr, editFields, editDisplay } = props;
    return (
        editDisplay
        ?<div className="eduInfoUI">
            <ul>
                {eduArr.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <button onClick={editFields} type="submit" className="eduEditBtn">Edit</button>
        </div>
        : null
    )
}

export default EduInfoOverview;