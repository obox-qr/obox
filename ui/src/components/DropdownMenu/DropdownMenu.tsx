import { useState, useRef, FC } from 'react';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';  
import { DropdownMenuProps } from './DropdownMenu.types.ts';
import {
  StyledInputLabel,
  StyledSelect,
  Options,
  StyledIndicator,
  StyledPaper,
} from './DropdownMenu.styled.ts';

export interface CurrencyOptions {
  value: string;
  label: string;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ options, label }) => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState<string>(options[0].value);
  const [focused, setFocused] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedValue(event.target.value as string);
  };

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  return (
    <div>
      <FormControl variant="outlined">
        <StyledInputLabel
          id="demo-simple-select-outlined-label"
          focused={focused}
          selected={selectedValue === options[0].value}
          theme={theme}
        >
          {label}
        </StyledInputLabel>
        <StyledSelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedValue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          autoFocus={open}
          ref={selectRef}
          selected={selectedValue === options[0].value}
          notched={false}
          theme={theme}
          IconComponent={() => (
            <StyledIndicator
              focused={focused}
              selected={selectedValue === options[0].value}
              onClick={handleToggleMenu}
              theme={theme}
            />
          )}
          MenuProps={{
            PaperProps: {
              component: StyledPaper,
            },
          }}
        >
          {options.map((option, index) => (
            <Options key={index} value={option.value} theme={theme}>
              {option.label}
            </Options>
          ))}
        </StyledSelect>
      </FormControl>
    </div>
  );
};

export default DropdownMenu;
