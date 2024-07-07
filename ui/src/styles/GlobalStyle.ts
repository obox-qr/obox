import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
body {
  font-family: ${(props) => props.theme.fontFamilyMulish};
  background-color: ${(props) => props.theme.whitePure};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul, 
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
} 

h1 {
	font-size: ${(props) => props.theme.fontSizeLargeMedium};
	font-weight: ${(props) => props.theme.fontWeightMedium};
	line-height:${(props) => props.theme.lineHeightNormal};
}

h2{
	font-size: ${(props) => props.theme.fontSizeMedium};
	font-weight: ${(props) => props.theme.fontWeightMedium};
	line-height:${(props) => props.theme.lineHeightTight};
}

h3{
	font-size: ${(props) => props.theme.fontSizeSmall};
	font-weight: ${(props) => props.theme.fontWeightRegular};
	line-height: ${(props) => props.theme.lineHeightRelaxed};
}

p {
	font-size: ${(props) => props.theme.fontSizeTiny};
	font-weight: ${(props) => props.theme.fontWeightRegular};
	line-height:${(props) => props.theme.lineHeightNormal};
}

button {
	font-family: inherit;
	text-align: center;
  cursor: pointer;
	font-size: ${(props) => props.theme.fontSizeExtraSmall};
	font-weight: ${(props) => props.theme.fontWeightMedium};
	line-height: ${(props) => props.theme.lineHeightLoose};	
}

input, select, textarea {
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSizeExtraSmall};
	font-weight: ${(props) => props.theme.fontWeightRegular};
	line-height:${(props) => props.theme.lineHeightNormal};
  border-width: ${(props) => props.theme.borderWidthSmall};  
	border-radius: ${(props) => props.theme.borderRadiusSmall};
	border-style: ${(props) => props.theme.borderStyle};
	background-color: ${(props) => props.theme.whitePure};
	border-color: ${(props) => props.theme.greyGreen};
	color: ${(props) => props.theme.greyGreen};
} 

:root {
  /*========================= FONT-FAMILY =====================*/
  --font-family-mulish: ${theme.fontFamilyMulish};
  
  /*============================ COLORS =======================*/
  --color-primary-green-darkest: ${theme.primaryGreenDarkest};
  --color-primary-green-darker: ${theme.primaryGreenDarker};
  --color-primary-green-dark: ${theme.primaryGreenDark};
  --color-primary-green: ${theme.primaryGreen};
  --color-primary-green-light: ${theme.primaryGreenLight};
  --color-primary-green-lighter: ${theme.primaryGreenLighter};
  --color-primary-green-lightest: ${theme.primaryGreenLightest};
  --color-primary-green-pale: ${theme.primaryGreenPale};
  --color-primary-green-very-pale: ${theme.primaryGreenVeryPale};

  --color-grey-green-darkest: ${theme.greyGreenDarkest};
  --color-grey-green-darker: ${theme.greyGreenDarker};
  --color-grey-green-dark: ${theme.greyGreenDark};
  --color-grey-green: ${theme.greyGreen};
  --color-grey-green-light: ${theme.greyGreenLight};
  --color-grey-green-lighter: ${theme.greyGreenLighter};
  --color-grey-green-lightest: ${theme.greyGreenLightest};
  --color-grey-green-pale: ${theme.greyGreenPale};
  --color-grey-green-very-pale: ${theme.greyGreenVeryPale};

  --color-black: ${theme.black};
  --color-dark: ${theme.dark}; 
  --color-grey-dark: ${theme.greyDark};
  --color-grey-lighter: ${theme.greyLighter}; 
  --color-grey-pale: ${theme.greyPale}; 
  --color-white-pure: ${theme.whitePure};

  --color-accent-orange-darkest: ${theme.accentOrangeDarkest};
  --color-accent-orange-darker: ${theme.accentOrangeDarker};
  --color-accent-orange-dark: ${theme.accentOrangeDark};
  --color-accent-orange: ${theme.accentOrange};
  --color-accent-orange-light: ${theme.accentOrangeLight};
  --color-accent-orange-lighter: ${theme.accentOrangeLighter};
  --color-accent-orange-lightest: ${theme.accentOrangeLightest};
  --color-accent-orange-pale: ${theme.accentOrangePale};
  --color-accent-orange-very-pale: ${theme.accentOrangeVeryPale};

  --color-system-info: ${theme.systemInfo};
  --color-system-warning: ${theme.systemWarning};
  --color-system-error: ${theme.systemError};
  --color-system-success: ${theme.systemSuccess};

  /*======================= FONT-SIZE ======================*/
  --font-size-large: ${theme.fontSizeLarge};
  --font-size-large-medium: ${theme.fontSizeLargeMedium};
  --font-size-medium: ${theme.fontSizeMedium};
  --font-size-medium-small: ${theme.fontSizeMediumSmall};
  --font-size-small: ${theme.fontSizeSmall};
  --font-size-smaller: ${theme.fontSizeSmaller};
  --font-size-extra-small: ${theme.fontSizeExtraSmall};
  --font-size-tiny: ${theme.fontSizeTiny};

  /*====================== FONT-WEIGHT ========================*/
  --font-weight-ultra-bold: ${theme.fontWeightUltraBold};
  --font-weight-bold: ${theme.fontWeightBold};
  --font-weight-medium: ${theme.fontWeightMedium};
  --font-weight-normal: ${theme.fontWeightNormal};

  /*======================= LINE-HEIGHT ========================*/
  --line-height-loose: ${theme.lineHeightLoose};
  --line-height-relaxed: ${theme.lineHeightRelaxed};
  --line-height-normal: ${theme.lineHeightNormal};
  --line-height-tight: ${theme.lineHeightTight};

  /*====================== LETTER-SPACING =======================*/
  --letter-spacing: ${theme.letterSpacing};

  /*====================== BORDER-RADIUS ==========================*/
  --border-radius-large: ${theme.borderRadiusLarge};
  --border-radius-extra-large: ${theme.borderRadiusExtraLarge};
  --border-radius-medium-large: ${theme.borderRadiusMediumLarge};
  --border-radius-medium: ${theme.borderRadiusMedium};
  --border-radius-small-medium: ${theme.borderRadiusSmallMedium};
  --border-radius-small: ${theme.borderRadiusSmall};
  --border-radius-extra-small: ${theme.borderRadiusExtraSmall};

  /*======================= BORDER-STYLE ==========================*/
  --border-style: ${theme.borderStyle};

  /*======================= BORDER_WIDTH =========================*/
  --qr-code-box-border: ${theme.qrCodeBoxBorder};
  --tabs-bottom-border: ${theme.tabsBottomBorder};
  --common-border: ${theme.commonBorder};

  /*=========================== SHADOW ===========================*/
  --select-btn-box-shadow:${theme.selectBtnBoxShadow};
  --color-picker-box-shadow: ${theme.colorPickerBoxShadow};
  --emoji-box-shadow: ${theme.emojiBoxShadow};
  --pop-up-box-shadow: ${theme.popUpBoxShadow};
  --registration-flow-box-shadow: ${theme.registrationFlowBoxShadow};
  --toast-message-box-shadow: ${theme.toastMessageBoxShadow};
} 
`;

export default GlobalStyle;
