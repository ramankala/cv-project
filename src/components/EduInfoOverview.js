const EduInfoOverview = (props) => {
    const { eduArr } = props;
    return (
        <div>
            <ul>
                {eduArr.map((item, index) => {
                    return (
                        <div>
                            <li key={index}>{item}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default EduInfoOverview;