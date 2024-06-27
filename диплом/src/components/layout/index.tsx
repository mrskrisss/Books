import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Footer } from '../footer'
import { Main } from '../main'

export const Layout = () => {
  return (
    <>
        <Header />
        <Main>
          <div className="container">
            <Outlet />
          </div>
        </Main>
        <Footer />
    </>
  )
}
