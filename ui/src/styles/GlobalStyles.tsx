import { GlobalStyles as GlobalStylesMUI } from '@mui/material';
import { Theme } from '@mui/material/styles';

const GlobalStyles = ({ theme }: { theme: Theme }) => (
  <GlobalStylesMUI
    styles={{
      body: {
        fontFamily: theme.main.custom.fontFamily,
        backgroundColor: theme.main.custom.whitePure,
      },

      'h1, h2, h3, h4, h5, h6, p': {
        margin: 0,
      },

      img: {
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
      },

      'ul, ol': {
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        listStyleType: 'none',
      },

      a: {
        textDecoration: 'none',
      },

      button: {
        fontFamily: 'inherit',
        cursor: 'pointer',
      },
    }}
  />
);

export default GlobalStyles;
