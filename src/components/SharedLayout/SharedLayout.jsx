import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main style={{ flexGrow: "1", zIndex: "1" }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
