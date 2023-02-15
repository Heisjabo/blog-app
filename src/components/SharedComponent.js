import Header from "./Header";
import { Outlet } from "react-router-dom";

const SharedComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedComponent;
