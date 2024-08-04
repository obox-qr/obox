import { useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  const theme = useTheme();
  return (
    <div style={{ color: theme.main.custom.greyGreenDarker }}>
      <header>
        <h1>Auth Layout Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Auth Layout footer</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
