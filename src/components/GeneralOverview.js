import '../styles/GeneralInfo.css';
const GeneralOverview = (props) => {
    const { genArr, editFields, editDisplay } = props;
    return (
        editDisplay
        ?<div className="generalInfoUI">
            <ul>
                {genArr.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <button onClick={editFields} type="submit" className="generalEditBtn">Edit</button>
        </div>
        : null
    )
}

export default GeneralOverview;