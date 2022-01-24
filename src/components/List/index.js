import Button from "../Button";

const List = (props) => {
    const { dataList } = props;

    const handleClick = (name) => {
        console.log(`hello ${name}`);
    }
    
    if (Array.isArray(dataList)){
        return (
            <ul>
                {
                    dataList.map((item, index) => (
                        <li key={`${item}-${index}`}>
                            <Button
                                handler={() => handleClick(item)}
                            /> {item}
                        </li>
                    ))
                }
            </ul>
        )
    } else {
        return '';
    }

    
}

export default List;