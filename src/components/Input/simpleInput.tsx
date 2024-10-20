import React from 'react';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Stack } from '@mui/material';
import clsx from 'clsx';

interface Props {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  showPasswordToggle?: boolean;
  isPassword?: boolean;
  formik: any;
}

const SimpleInput: React.FC<Props> = ({
  name,
  label,
  type,
  placeholder = '',
  showPasswordToggle = false,
  isPassword = false,
  formik,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {({ field, form }: { field: any; form: any }) => (
        <Input
          {...formik.getFieldProps(name)}
          className={clsx(
            isPassword && 'password',
            formik?.values[name] && 'fill'
          )}
          {...field}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          fullWidth
          error={form.touched[name] && !!form.errors[name]}
          endAdornment={
            showPasswordToggle && (
              <InputAdornment position='end'>
                <IconButton onClick={togglePasswordVisibility} edge='end'>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
      )}
    </>
  );
};

export default SimpleInput;
