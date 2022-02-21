import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';


export const Content = ({ handleClick }) => {

    return (
        <Pagination
            count={3}
            renderItem={(item) => {
                console.log(item);
                return (
                    <PaginationItem
                        component={Link}
                        to={`${item.page === 1 ? '' : `${item.page}`}`}
                        {...item}
                    />
                )
            }}
        />
    )
}
