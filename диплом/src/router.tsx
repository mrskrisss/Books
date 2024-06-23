import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { ListNewBooks } from './pages/ListNewBooks'
import { Book } from './pages/Book'
import { Favorite } from './pages/Favorite'
import { SearchResults } from './pages/SearchResults'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ListNewBooks />
      },
      {
        path: '/books/:bookId',
        element: <Book />
      },
      {
        path: '/favorite',
        element: <Favorite />
      },
      {
        path: '/search/:search',
        element: <SearchResults />
      }
    ]
  }
])
