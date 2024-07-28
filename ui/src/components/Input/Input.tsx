import { ForwardedRef, forwardRef } from 'react';
// import { useFormInput } from '@shared/hooks/useFormInput';
import { IInput, InputVariants } from './types';
import './Input.scss';

export const InnerInput = (
  props: IInput<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const {
    // id,
    // name,
    // placeholder,
    // onChange,
    // type,
    // value,
    // checked,
    // isDisabled,
    // сlassName,
  } = props;
};

export const Input = forwardRef(InnerInput);
