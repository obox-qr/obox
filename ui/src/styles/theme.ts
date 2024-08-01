import { createTheme } from '@mui/material/styles';
import { CustomStyles } from './theme.types.ts';

declare module '@mui/material/styles' {
  interface Theme {
    main: CustomStyles;
  }
  interface ThemeOptions {
    main?: CustomStyles;
  }
}

const theme = createTheme({
  main: {
    custom: {
      systemInfo: '#363DFA',
      systemWarning: '#FFD900',
      systemError: '#F21111',
      systemSuccess: '#11BF18',
			
      primaryGreenDarkest: '#2F4B36',
      primaryGreenDarker: '#41644A',
      primaryGreenDark: '#557E5F',
      primaryGreen: '#6A9775',
      primaryGreenLight: '#80B08C',
      primaryGreenLighter: '#98CAA5',
      primaryGreenLightest: '#B0E4BE',
      primaryGreenPale: '#CBFDD8',
      primaryGreenVeryPale: '#E3FFEA',

      greyGreenDarkest: '#252C27',
      greyGreenDarker: '#3D4840',
      greyGreenDark: '#546358',
      greyGreen: '#6C7F70',
      greyGreenLight: '#86988A',
      greyGreenLighter: '#A1AFA5',
      greyGreenLightest: '#BDC7BF',
      greyGreenPale: '#D8DEDA',
      greyGreenVeryPale: '#F4F6F4',

      black: '#0A0F29',
      dark: '#030300',
      greyDark: '#696A62',
      greyLighter: '#E6E6E5',
      greyPale: '#F3F3F2',
      whitePure: '#FFFFFF',

      accentOrangeDarkest: '#601D00',
      accentOrangeDarker: '#822D07',
      accentOrangeDark: '#A43E12',
      accentOrange: '#C65321',
      accentOrangeLight: '#E86A33',
      accentOrangeLighter: '#FF7E46',
      accentOrangeLightest: '#FF9B6F',
      accentOrangePale: '#FFB899',
      accentOrangeVeryPale: '#FFD5C3',

      fontFamily: '"Mulish", sans-serif',

      fontSizeLarge: '40px',
      fontSizeLargeMedium: '32px',
      fontSizeMedium: '24px',
      fontSizeMediumSmall: '22px',
      fontSizeSmall: '20px',
      fontSizeSmaller: '18px',
      fontSizeExtraSmall: '16px',
      fontSizeTiny: '14px',

      lineHeightLoose: 1.5,
      lineHeightRelaxed: 1.4,
      lineHeightNormal: 1.2,
      lineHeightTight: 1.0,

      fontWeightUltraBold: 800,
      fontWeightBold: 700,
      fontWeightMedium: 500,
      fontWeightRegular: 400,

      letterSpacing: '0.02em',

      borderStyle: 'solid',

      borderWidthQrCode: '3px',
      borderWidthTabs: '2px',
      borderWidthCommon: '1px',

      borderRadiusExtraLarge: '50px',
      borderRadiusLarge: '24px',
      borderRadiusMediumLarge: '16px',
      borderRadiusMedium: '12px',
      borderRadiusSmallMedium: '10px',
      borderRadiusSmall: '8px',
      borderRadiusExtraSmall: '4px',

      selectBtnBoxShadow: '0px 4px 4px 0px rgba(37, 44, 39, 0.15)',
      colorPickerBoxShadow: '1px 1px 12px 0px rgba(37, 44, 39, 0.25)',
      emojiBoxShadow: '1px 1px 12px 0px rgba(0, 0, 0, 0.25)',
      popUpBoxShadow: '4px 4px 26px 0px rgba(0, 0, 0, 0.25)',
      registrationFlowBoxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      toastMessageBoxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
    },
  },
});

export default theme;
