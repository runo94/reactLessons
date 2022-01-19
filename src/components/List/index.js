import Button from "../Button";

const List = (props) => {
    const { dataList } = props;

    const handleClick = (name) => {
        console.log(`hello ${name}`);
    }

    return (
        <ul>
            {
                dataList.map((item) => (
                    <li>
                        <Button
                            handler={() => handleClick(item)}
                        /> {item}
                    </li>
                ))
            }
        </ul>
    )
}

export default List;