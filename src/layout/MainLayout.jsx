import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div>
      {/* mainLayout section start */}
        {/* navbar section start */}
        <Navbar></Navbar>
        {/* navbar section end */}
        {/* content section start */}
        <Outlet></Outlet>
        {/* content section end */}
        {/* footer section start */}
        <Footer></Footer>
        {/* footer section end */}
      {/* mainLayout section end */}
    </div>
  );
};

export default MainLayout;