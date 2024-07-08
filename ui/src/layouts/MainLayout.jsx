import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <h1>Main Layout Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Main Layout footer</p>
      </footer>
    </>
  );
};

export default MainLayout;
