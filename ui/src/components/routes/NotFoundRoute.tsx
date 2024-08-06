import { useTheme } from '@mui/material/styles';
const NotFoundRoute = () => {
  const theme = useTheme();
  return (
    <div style={{ color: theme.main.custom.greyGreenDarker }}>
      <p>Page Not Found</p>
    </div>
  );
};

export default NotFoundRoute;
