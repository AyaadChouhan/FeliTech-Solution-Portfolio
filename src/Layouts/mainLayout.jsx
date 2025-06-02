/* eslint-disable no-unused-vars */
import Header from "./header";
import Footer from "./footer";


// import NewsTicker from '../Components/NewsTicker'
// // import Header2 from './latestNotice'

const MainLayout = ({ children, showHeader2 = false }) => {
  //  const location = useLocation();
  // const isHomePage = location.pathname === ROUTES.HOME;
  {/* <NewsTicker/> */}
  {/* {showHeader2} */}
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
