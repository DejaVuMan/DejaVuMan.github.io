import { Outlet } from "react-router-dom";
import  MenuNav  from "../components/MenuNav";

const Layout = () => {
  return (
    <>
        <MenuNav />
        <Outlet />
    </>
  )
};

export default Layout;
