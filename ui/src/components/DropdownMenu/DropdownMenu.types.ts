import { Theme } from '@mui/material/styles';
import { CurrencyOptions } from './DropdownMenu.tsx';

export interface DropdownMenuProps {
  options: CurrencyOptions[];
  label: string;
}

export interface StyledProps {
  theme: Theme;
  focused?: boolean;
  selected?: boolean;
}
