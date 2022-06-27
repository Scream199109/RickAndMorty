import React, { useContext } from 'react';
import context from '../../Context/context';
import Pagination from '@mui/material/Pagination';

const PaginationComp = ({ pageNumber, setPageNumber }) => {
  const { state } = useContext(context)
  const { info } = state.content
  return (
    <div className="pagination">
      <Pagination
        count={info?.pages}
        color="primary"
        page={pageNumber}
        onChange={(_, num) => setPageNumber(num)}
      />
    </div>

  );
};

export default PaginationComp;
