import { NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { buildPaginationScheme } from '../../utils/buildPaginationScheme'

interface IPagination {
  route: string
}

export function Pagination (props: IPagination) {
  const { page: currentPage } = useParams()
  // const { search } = useParams<{search: string}>()
  const pagesCount = useSelector((state: RootState) => state.books.pagesCount)

  if (!pagesCount) return null

  const paginationScheme = buildPaginationScheme(currentPage, pagesCount)

  return (
    <ul className="pagination">
      {paginationScheme.map((item, index) => {
        if (item === '...') {
          return (
            <li className="page-item" key={index}>
              <span className="page-link">...</span>
            </li>
          )
        }

        return (
          <li className="page-item" key={index}>
            <NavLink className="page-link" to={`/search/${props.route}/${item}`}>
              {item}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
