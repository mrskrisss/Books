import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Footer } from '../footer'
import { Main } from '../main'

export function Layout () {
  return (
    <>
        <Header />
        <Main>
          <div className="">
            <Outlet />
          </div>
        </Main>
        <Footer />
    </>
  )
}
