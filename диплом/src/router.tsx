import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { ListNewBooks } from './pages/ListNewBooks'
// import { Book } from './pages/Book'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ListNewBooks />
      }
      // {
      //   path: '/books/:bookId',
      //   element: <Book />
      // }
    ]
  }
])
