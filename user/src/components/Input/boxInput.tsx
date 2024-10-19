// Libraries
import { useState } from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import clsx from 'clsx';

// Common Components
import { placeholder, Typography } from '../../styles/common';

// Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const BoxInputStyled: any = styled(Box)`
  border-radius: 12px;
  border: 1px solid var(--box-input-border-color);
  border-color: ${({ error }: any) =>
    error ? 'var(--error-text-color)' : 'var(--box-input-border-color)'};
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  background-color: var(--white-color);

  @media (max-width: 576px) {
    height: 55px;
  }

  .icon {
    height: 100%;
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .MuiDivider-root {
      position: absolute;
      right: 0;
      top: 4px;
      height: 88%;
      padding: 0;
      border-color: ${({ error }: any) =>
        error ? 'var(--error-text-color)' : 'var(--box-input-border-color)'};

      @media (max-width: 576px) {
        top: 3px;
      }
    }
  }
`;

const TextFieldWrapper: any = styled(TextField)`
  margin-bottom: ${({ mb }: any) => mb || 0};
  .MuiInputBase-input {
    &:-webkit-autofill {
      box-shadow: 0 0 0 100px #fff inset !important;
      -webkit-box-shadow: 0 0 0 100px #fff inset !important;
      -webkit-text-fill-color: var(--black-color) !important;
      margin: 9px 0px;
      max-height: 10px;
    }

    &:-internal-autofill-selected {
      appearance: menulist-button;
      background-image: none !important;
      background-color: light-dark(
        rgb(255, 255, 255),
        rgb(255, 255, 255)
      ) !important;
      color: fieldtext !important;
    }
  }

  .MuiInputLabel-root,
  .MuiOutlinedInput-root {
    color: #000 !important;
  }
  svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiSvgIcon-root {
    fill: black !important;
  }

  &&.MuiFormControl-root.MuiTextField-root {
    width: 100%;
  }

  .MuiFormLabel-root.MuiInputLabel-root.Mui-focused {
    margin-top: 15px;
  }

  .MuiInputBase-input.MuiOutlinedInput-input:focus {
    padding-top: 20px;
  }

  &&.fill.MuiFormControl-root.MuiTextField-root {
    .MuiFormLabel-root.MuiInputLabel-root {
      margin-top: 18px;
    }

    .MuiInputBase-input.MuiOutlinedInput-input {
      padding-top: 25px;
    }
  }

  .MuiButtonBase-root.MuiIconButton-root {
    margin-right: 0px;
  }

  .MuiFormLabel-root.MuiInputLabel-root {
    font-size: 16px;
    font-weight: 400;
    color: ${({ error }: any) =>
      error ? 'var(--error-text-color)' : 'var(--box-input-label-color)'};
    font-family: unset;
  }

  .MuiInputBase-root.MuiOutlinedInput-root {
    font-size: 18px;
    font-weight: 400;
    color: ${({ error }: any) =>
      error ? 'var(--error-text-color)' : 'var(--black-color)'};
    width: 100%;
    font-family: unset;
    ${placeholder};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
  .MuiOutlinedInput-root {
    fill: #000 !important;
  }
`;

const TextFieldStyled = ({
  formik,
  type,
  name,
  placeHolder,
  width,
  onBlur,
  disabled,
  height,
  radius,
  label,
  isPassword,
  mb,
  icon,
  required,
}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const showError = formik.touched[name] && formik.errors[name];
  return (
    <Stack mb={showError ? 1 : mb}>
      <BoxInputStyled error={showError ? true : false}>
        <Box className='icon'>
          {icon}
          <Divider orientation='vertical' flexItem />
        </Box>
        <TextFieldWrapper
          {...formik.getFieldProps(name)}
          className={clsx(
            isPassword && 'password',
            formik?.values[name] && 'fill'
          )}
          type={showPassword ? 'text' : type}
          name={name}
          label={label}
          placeholder={placeHolder}
          error={showError ? true : false}
          variant='outlined'
          onBlur={onBlur}
          width={width}
          radius={radius}
          height={height}
          disabled={disabled}
          autoComplete='off'
          size='small'
          InputProps={{
            style: {
              backgroundColor: 'var(--transparent)',
            },
            endAdornment: isPassword && (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </BoxInputStyled>
      {showError && (
        <Typography mt={3} color='var(--error-text-color)'>
          {formik.errors[name]}
        </Typography>
      )}
    </Stack>
  );
};

export default TextFieldStyled;
