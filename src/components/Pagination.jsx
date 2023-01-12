import { useDispatch, useSelector } from 'react-redux';
import RectPaginate from 'react-paginate';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

import { setPageNumber } from '../features/characters/characterSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { charactersDetails, pageNumber } = useSelector(
    (state) => state.characters
  );

  return (
    <RectPaginate
      pageCount={charactersDetails.info?.pages}
      className="pagination"
      pageLinkClassName="page-link "
      nextLabel={<GrLinkNext className="next" />}
      previousLabel={<GrLinkPrevious className="prev" />}
      activeClassName="active"
      onPageChange={(data) => {
        let requiredPageNumber = data.selected + 1;
        dispatch(setPageNumber(requiredPageNumber));
      }}
    />
  );
};

export default Pagination;
