// eslint-disable-next-line no-unused-vars

import { Outlet } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return <>

    <Header />
    <Outlet />
    <Footer />

  </>;
}

export default Layout