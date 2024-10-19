import React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';

const ButtonWrapper: any = styled(Button)`
  &&.MuiButtonBase-root {
    font-size: ${({ fontSize }: any) => fontSize || 14}px;
    font-weight: ${({ weight }: any) => weight || 400};
    border-radius: ${({ radius }: any) => radius || 4}px;
    height: ${({ height }: any) => height || 42}px;
    width: ${({ width }: any) => width || '100px'};
    min-width: ${({ width, minwidth }: any) =>
      minwidth ? minwidth : `${width}px` || '100px'};
    margin-top: ${({ mt }: any) => mt || 0}px;
    margin-right: ${({ mr }: any) => mr || 0}px;
    margin-bottom: ${({ mb }: any) => mb || 0}px;
    margin-left: ${({ ml }: any) => ml || 0}px;
    position: ${({ position }: any) => position};
    left: ${({ left }: any) => left};
    line-height: normal;
    text-transform: capitalize;
    padding: ${({ padding }: any) => padding};
    background: ${({ backgroundColor }: any) =>
      backgroundColor || 'var(--primary-button-background-color)'};
    color: ${({ textColor }: any) =>
      textColor || 'var(--primary-button-text-color)'};
    border: 1px solid
      ${({ borderColor }: any) =>
        borderColor || 'var(--primary-button-background-color)'};

    &:hover {
      background: ${({ backgroundColor }: any) =>
        backgroundColor || 'var(--primary-button-background-color)'};
      color: ${({ textColor }: any) =>
        textColor || 'var(--primary-button-text-color)'};
      border: 1px solid
        ${({ borderColor }: any) =>
          borderColor || 'var(--primary-button-background-color)'};
    }

    .MuiButton-startIcon {
      margin-left: 0px;
    }
  }
  &&.Mui-disabled {
    background: var(--field-disabled-text-color) !important  ;
    -webkit-text-fill-color: var(--primary-button-text-color) !important;
    border: 1px solid var(--field-disabled-text-color);
    curser: not-allowed;
  }

  &&.secondary.MuiButtonBase-root {
    background: ${({ backgroundColor }: any) =>
      backgroundColor || 'var(--secondary-button-background-color)'};
    color: ${({ textColor }: any) =>
      textColor || 'var(--secondary-button-text-color)'};
    border: 1px solid
      ${({ borderColor }: any) =>
        borderColor || 'var(--secondary-button-background-color)'};

    &:hover {
      background: ${({ backgroundColor }: any) =>
        backgroundColor || 'var(--secondary-button-background-color)'};
      color: ${({ textColor }: any) =>
        textColor || 'var(--secondary-button-text-color)'};
      border: 1px solid
        ${({ borderColor }: any) =>
          borderColor || 'var(--primary-button-background-color)'};
    }
  }

  &&.outline-primary.MuiButtonBase-root {
    background: ${({ backgroundColor }: any) =>
      backgroundColor || 'var(--transparent)'};
    color: ${({ textColor }: any) =>
      textColor || 'var(--primary-button-background-color)'};
    border: 1px solid
      ${({ borderColor }: any) =>
        borderColor || 'var(--primary-button-background-color)'};

    &:hover {
      background: ${({ backgroundColor }: any) =>
        backgroundColor || 'var(--transparent)'};

      color: ${({ textColor, HoverColor }: any) =>
        HoverColor || textColor || 'var(--primary-button-background-color)'};
      border: 1px solid
        ${({ borderColor, HoverBorder }: any) =>
          HoverBorder ||
          borderColor ||
          'var(--primary-button-background-color)'};
    }
  }

  &&.block-button {
    width: 100%;
  }
`;

const ButtonStyled = ({
  type,
  className,
  text,
  height,
  width,
  weight,
  onClick,
  position,
  left,
  marginLeft,
  disabled,
  backgroundColor,
  minwidth,
  borderColor,
  textColor,
  radius,
  loading,
  startIcon,
  endIcon,
  fontSize,
  mt,
  mb,
  mr,
  ml,
  padding,
}: any) => {
  return (
    <ButtonWrapper
      type={type}
      className={className}
      height={height}
      width={width}
      minwidth={minwidth}
      weight={weight}
      left={left}
      position={position}
      onClick={(event: any) => (!loading && onClick ? onClick(event) : {})}
      fontSize={fontSize}
      marginLeft={marginLeft}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      disabled={disabled}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      radius={radius}
      startIcon={startIcon}
      endIcon={endIcon}
      padding={padding}
      disableRipple
    >
      {loading ? <CircularProgress size={20} color='inherit' /> : text}
    </ButtonWrapper>
  );
};

export default ButtonStyled;
