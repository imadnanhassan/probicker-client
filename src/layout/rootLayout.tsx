import MainFooter from "@/components/common/MainFooter";
import MainHeader from "@/components/common/MainHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <main>
        <Outlet />
      </main>
     <MainFooter/>
    </>
  );
};

export default RootLayout;
