import { useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const theme = useTheme();
  return (
    <div style={{ color: theme.main.custom.greyGreenDarker }}>
      <header>
        <h1>Main Layout Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Main Layout footer</p>
      </footer>
    </div>
  );
};

export default MainLayout;
