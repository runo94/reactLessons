import { useParams, Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export const CardsPagination = () => {
    const params = useParams();
    const page = Number(params.page) > 1 ? Number(params.page) : 1
    return (
        <Pagination
            count={3}
            page={page}
            renderItem={(item) => {
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
