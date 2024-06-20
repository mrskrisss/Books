import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './App.scss'

export default function App () {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}>
        </RouterProvider>
      </Provider>
    </>
  )
}
