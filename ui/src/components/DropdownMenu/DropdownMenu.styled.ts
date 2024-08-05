import { styled } from '@mui/system';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Paper from '@mui/material/Paper';
import { StyledProps } from './DropdownMenu.types';

export const StyledInputLabel = styled(InputLabel)<StyledProps>(
  ({ theme, focused, selected }) => ({
    position: 'static',
    transform: 'none',
    textAlign: 'start',
    marginBottom: '4px',
    fontSize: theme.main.custom.fontSizeSmall,
    fontWeight: theme.main.custom.fontWeightRegular,
    lineHeight: theme.main.custom.lineHeightRelaxed,

    '&.MuiFormLabel-colorPrimary': {
      color: focused
        ? theme.main.custom.greyGreenDark
        : selected
          ? theme.main.custom.greyGreenDarker
          : theme.main.custom.primaryGreenDarker,
    },
  })
);

export const StyledSelect = styled(Select, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<StyledProps>(({ theme, selected }) => ({
  textAlign: 'start',
  padding: '0px 16px',
  height: '48px',
  width: '310px',
  fontSize: theme.main.custom.fontSizeExtraSmall,
  fontWeight: theme.main.custom.fontWeightRegular,
  lineHeight: theme.main.custom.lineHeightNormal,
  borderRadius: theme.main.custom.borderRadiusSmall,
  borderWidth: theme.main.custom.borderWidthCommon,
  borderStyle: theme.main.custom.borderStyle,
  backgroundColor: theme.main.custom.whitePure,

  color: selected
    ? theme.main.custom.greyGreen
    : theme.main.custom.greyGreenDarker,

  borderColor: selected
    ? theme.main.custom.primaryGreen
    : theme.main.custom.primaryGreenDarker,

  '&.Mui-focused': {
    color: theme.main.custom.greyGreenDark,
    borderColor: theme.main.custom.greyGreenDark,
  },

  '.MuiOutlinedInput-input': {
    padding: '0px',
    display: 'flex',
    alignItems: 'center',
  },

  '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
}));

export const Options = styled(MenuItem)<StyledProps>(({ theme }) => ({
  display: 'flex',
  padding: '0px 24px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '48px',
  cursor: 'pointer',
  fontSize: theme.main.custom.fontSizeExtraSmall,
  fontWeight: theme.main.custom.fontWeightRegular,
  lineHeight: theme.main.custom.lineHeightNormal,
  color: theme.main.custom.greyGreen,
  borderBottomWidth: theme.main.custom.borderWidthCommon,
  borderBottomStyle: theme.main.custom.borderStyle,
  borderBottomColor: theme.main.custom.greyGreenLight,

  '&.MuiButtonBase-root': {
    '&:hover, &:focus, &.Mui-selected': {
      backgroundColor: theme.main.custom.whitePure,
    },
  },
  variants: [],
}));

export const StyledIndicator = styled(KeyboardArrowDown, {
  shouldForwardProp: (prop) => prop !== 'focused' && prop !== 'selected',
})<StyledProps>(({ theme, focused, selected }) => ({
  cursor: 'pointer',
  fill: focused
    ? theme.main.custom.greyGreenDark
    : selected
      ? theme.main.custom.greyGreen
      : theme.main.custom.greyGreenDarker,
}));

export const StyledPaper = styled(Paper)<StyledProps>(({ theme }) => ({
  '&.MuiMenu-paper': {
    boxShadow: 'none',
    borderRadius: theme.main.custom.borderRadiusLarge,
  },
}));
