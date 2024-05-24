import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
  return (
    <div>
      {/* mainLayout section start */}
        {/* navbar section start */}
        <h1>Navbar section start</h1>
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