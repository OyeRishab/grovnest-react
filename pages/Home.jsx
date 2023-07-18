import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}

export default Home;
