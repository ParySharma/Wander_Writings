'use client';

// Libraries
import { useState } from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import clsx from 'clsx';
// Common Components
import { InputStyled } from '@/styles/common';
import { Typography } from '@/styles/common';
// Utils
import { EMPTY_STRING } from '@/utils/constants';

// Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { formatCurrency } from '@/utils/setCurrency';
import _size from 'lodash/size';
import _trim from 'lodash/trim';

const TextFieldWrapper: any = styled(TextField)`
  ${InputStyled};

  &&.password {
    .MuiInputBase-root.MuiOutlinedInput-root {
      font-size: ${({ type }: any) => (type === 'password' ? 25 : 14)}px;
    }
  }
  margin-top: ${({ mt }: any) => mt || 0}px;
  width: ${({ width }: any) => width} !important;

  .MuiFormHelperText-root {
    margin-left: 0;
    margin-right: 0;
  }
`;
const TextFieldStyled = ({
  formik,
  type,
  name,
  value,
  onChange,
  label,
  maxLength,
  placeHolder,
  mt,
  ltop,
  height,
  mr,
  disabled,
  backgroundColor,
  mb,
  multiline,
  onKeyDown,
  onBlur,
  maxRows,
  rows,
  borderColor,
  radius,
  onMouseDown,
  top,
  isPassword,
  isVerify,
  isVerifyIcon,
  required,
  width,
  minValue,
  maxValue,
  showStartIcon,
  showEndIcon,
  fieldTouched,
  fieldError,
  maxWidth,
  helperText,
  amount,
  variant = 'outlined',
}: any) => {
  const showError =
    (fieldTouched && fieldError) ||
    (formik?.touched[name] && formik?.errors[name]);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const endAdornment = () => {
    if (isPassword) {
      return (
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
      );
    }
    if (isVerifyIcon) {
      return isVerify ? (
        <CheckCircleIcon sx={{ fill: '#1DC894 !important' }} />
      ) : (
        <CancelIcon sx={{ fill: 'var(--error-text-color) !important' }} />
      );
    }
    if (showEndIcon) {
      return showEndIcon;
    }
  };

  const checkNumberInputValidation = (event: any) => {
    if (type === 'number') {
      if (maxValue)
        return (event.target.value =
          event.target.value <= maxValue
            ? event.target.value &&
              Math.max(minValue || 0, parseInt(event.target.value))
                .toString()
                .slice(0, maxLength)
            : formik?.values[name]);
      event.target.value =
        event.target.value &&
        Math.max(minValue || 0, parseInt(event.target.value))
          .toString()
          .slice(0, maxLength);
    }
  };

  const handleOnChange = (event: any) => {
    let value = event.target.value;
    if (amount) {
      return formatCurrency(value);
    }
    return _size(_trim(value)) !== 0 ? value : EMPTY_STRING;
  };

  const textFieldStyles =
    variant === 'standard'
      ? {
          sx: {
            textAlign: 'center',
            '&.MuiInput-root::after': {
              borderBottom: '3px solid var(--primary-button-background-color)',
            },
            '& .MuiInput-input': {
              textAlign: 'center',
            },
          },
          inputProps: {
            style: {
              textAlign: 'center',
            },
          },
        }
      : null;

  return (
    <Stack sx={{ width: width || '100%' }} maxWidth={maxWidth}>
      <TextFieldWrapper
        {...textFieldStyles}
        {...formik?.getFieldProps(name)}
        className={clsx(
          isPassword && 'password',
          formik?.values[name] && 'fill'
        )}
        type={showPassword ? 'text' : type}
        name={name}
        value={value || formik?.values[name] || ''}
        error={showError ? true : false}
        label={
          label && (
            <Box display={'inline-flex'} gap={'2px'}>
              {label}
              {required ? (
                <Typography
                  size={14}
                  weight={400}
                  color='var(--error-text-color)'
                >
                  *
                </Typography>
              ) : (
                ''
              )}
            </Box>
          )
        }
        placeholder={placeHolder}
        mt={mt}
        variant={variant === 'standard' ? 'standard' : 'outlined'}
        mr={mr}
        disabled={disabled}
        backgroundColor={backgroundColor}
        width={width}
        ltop={ltop}
        mb={showError ? 2 : mb}
        multiline={multiline}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        maxRows={maxRows}
        rows={rows}
        borderColor={borderColor}
        radius={radius}
        onInput={checkNumberInputValidation}
        onMouseDown={onMouseDown}
        autoComplete='off'
        onChange={(event: any) => {
          formik?.setFieldValue(name, handleOnChange(event));
          onChange && onChange(event.target.value);
        }}
        inputProps={{
          min: minValue,
          max: maxValue,
          maxLength: maxLength,
        }}
        top={top}
        maxLength={maxLength}
        helperText={helperText}
        InputProps={{
          style: {
            borderRadius: radius || 6,
            backgroundColor: backgroundColor
              ? backgroundColor
              : 'var(--input-background-color)',
            height: height || 54,
            ltop: ltop || 0,
            alignItems: type === 'textarea' ? 'flex-start' : 'center',
          },
          startAdornment: showStartIcon && (
            <InputAdornment
              sx={{
                color: 'var(--placeholder-text-color)',
              }}
              position='start'
            >
              {showStartIcon}
            </InputAdornment>
          ),
          endAdornment: endAdornment(),
        }}
      />
      {showError && (
        <Typography mb={5} color='var(--error-text-color)'>
          {fieldError || formik?.errors[name]}
        </Typography>
      )}
    </Stack>
  );
};

export default TextFieldStyled;
