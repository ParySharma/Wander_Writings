'use client';

import React from 'react';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Card } from '@mui/material';
import ModuleNameTitle from '../ModuleNameTitle';
import { Typography } from '@/styles/common';
import Grid from '@mui/material/Grid2';

interface CardWrapperProps {
  className?: string;
  height?: string | number; // Define the height prop
  width?: string | number;
  mb?: number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  radius?: number;
  fontSize?: number;
  marginLeft?: string | number;
  marginTop?: string | number;
  ml?: string | number;
  p?: string | number;
  boxShadow?: any;
  border?: any;
  testAlign?: any;
  overflow?: any;
  minHeight?: string | number;
  maxheight?: string | number;
}

const CardWrapper = styled(Card)<CardWrapperProps>`
  &&.MuiCard-root {
    height: ${({ height }: any) => height || '100%'};
    min-height: ${({ minHeight }: any) => minHeight};
    max-height: ${({ maxHeight }: any) => maxHeight};
    width: ${({ width }: any) => width || '100%'};
    margin-bottom: ${({ mb }: any) => mb || 24}px;
    background-color: ${({ backgroundColor }: any) =>
      backgroundColor || 'var(--card-background-color)'};
    border-color: ${({ borderColor }: any) => borderColor || 'none'};
    color: ${({ textColor }: any) => textColor || 'var(--card-text-color)'};
    border-radius: ${({ radius }: any) => radius || 12}px;
    font-size: ${({ fontSize }: any) => fontSize || 18}px !important;
    margin-top: ${({ marginTop }: any) => marginTop || 0}px;
    margin-left: ${({ ml }: any) => ml || 0}px;
    box-shadow: ${({ boxShadow }: any) =>
      boxShadow || '0px 4px 4px 0px #00000014'};
    padding: ${({ p }: any) => p || '24px'};
    border: ${({ border }: any) => border || 'none'};
    text-align: ${({ testAlign }: any) => testAlign || 'left'};
  }
`;
interface CardWrapperProps {
  className?: string;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  ModelTitle?: string;
  width?: string | number;
  mb?: number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  filterHere?: any;
  radius?: number;
  border?: any;
  fontSize?: number;
  marginLeft?: string | number;
  marginTop?: string | number;
  ml?: string | number;
  p?: string | number;
  boxShadow?: any;
  overflow?: any;
  testAlign?: any;
}

const CardStyled = ({
  className,
  maxheight,
  minHeight,
  height,
  ModelTitle,
  IncardTitle,
  width,
  maxHeight,
  border,
  testAlign,
  filterHere,
  marginLeft,
  backgroundColor,
  bordercolor,
  textColor,
  radius,
  loading,
  startIcon,
  fontSize,
  boxShadow,
  overflow,
  marginTop,
  mb,
  ml,
  p,
  children,
}: any) => {
  return (
    <>
      {ModelTitle && <ModuleNameTitle title={ModelTitle} />}

      <CardWrapper
        className={className}
        maxheight={maxheight}
        height={height || 'auto'}
        ModelTitle={ModelTitle}
        width={width}
        minHeight={minHeight}
        marginLeft={marginLeft}
        backgroundColor={backgroundColor}
        borderColor={bordercolor}
        textColor={textColor}
        radius={radius}
        border={border}
        fontSize={fontSize}
        boxShadow={boxShadow}
        overflow={maxHeight && overflow}
        maxHeight={maxHeight}
        testAlign={testAlign}
        marginTop={marginTop}
        ml={ml}
        p={p}
        mb={mb}
      >
        {loading ? (
          <CircularProgress size={20} color='inherit' />
        ) : (
          <>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
              {startIcon && startIcon}
              <Grid size={{ xs: 'auto' }}>
                <Typography
                  size={22}
                  weight={500}
                  color={'var(--body-text-color)'}
                >
                  {IncardTitle}
                </Typography>
              </Grid>
              {filterHere && (
                <Grid
                  container
                  size={{ xs: 2.9 }}
                  justifyContent='end'
                  padding={0}
                >
                  {filterHere}
                </Grid>
              )}
            </Grid>

            {children}
          </>
        )}
      </CardWrapper>
    </>
  );
};

export default CardStyled;
