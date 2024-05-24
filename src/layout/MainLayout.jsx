import { Outlet } from "react-router-dom";


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
        <h1>Footer section start</h1>
        {/* footer section end */}
      {/* mainLayout section end */}
    </div>
  );
};

export default MainLayout;