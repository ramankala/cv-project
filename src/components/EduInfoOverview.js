const EduInfoOverview = (props) => {
    const { eduArr, editFields } = props;
    return (
        <div>
            <ul>
                {eduArr.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <button onClick={editFields} type="submit">Edit</button>
        </div>
    )
}

export default EduInfoOverview;