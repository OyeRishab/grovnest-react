import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <Outlet />
    </>
  );
}

export default Home;
