import { Link } from "react-router-dom";

const Pagination = ({ handleClick }) => {

    return (
        <>
            <Link to={`/1`} onClick={handleClick}>1</Link>
            <Link to={`/2`} onClick={handleClick}>2</Link>
            <Link to={`/3`} onClick={handleClick}>3</Link>
        </>
    )


}

export default Pagination;