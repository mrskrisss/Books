import { Outlet } from 'react-router-dom'
import { Wrapper } from '../wrapper'
import { Header } from '../header'
import { Footer } from '../footer'
import { Main } from '../main'

export const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <div className="container">
            <Outlet />
          </div>
        </Main>
        <Footer />
      </Wrapper>
    </>
  )
}
