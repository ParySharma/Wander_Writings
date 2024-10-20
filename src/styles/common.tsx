import styled from '@emotion/styled';
import css from 'styled-jsx/css';

const miniScrollSize = 3;
const miniScrollPadding = 5;

const scrollSize = 8;

export const scrollbars = css`
  scrollbar-width: auto !important;
  -ms-overflow-style: auto !important;
  -webkit-scrollbar: auto !important;

  &::-webkit-scrollbar {
    width: ${scrollSize}px;
    height: ${scrollSize}px;
    display: block !important;

    @media (min-width: 320px) and (max-width: 767px) {
      width: ${miniScrollSize}px;
      height: ${miniScrollPadding}px;
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #6d6b6b;
  }
`;

export const placeholder: any = css`
  &::placeholder {
    font-size: ${({ size }: any) => size || 14};
    font-weight: ${({ weight }: any) => weight || 400};
    color: var(--placeholder-text-color);
    opacity: 1;
  }
`;

export const Form: any = styled.form``;

export const Title: any = styled.h1`
  font-size: ${({ size }: any) => size || 20}px;
  font-weight: ${({ weight }: any) => weight || 600};
  color: ${({ color }: any) => color || 'var(--black-color)'};
  text-transform: capitalize;
  margin-top: ${({ mt }: any) => mt || 0}px;
  margin-bottom: ${({ mb }: any) => mb || 0}px;
`;

export const AddTitle: any = styled.h1`
  font-size: ${({ size }: any) => size || 22}px;
  font-weight: ${({ weight }: any) => weight || 600};
  color: ${({ color }: any) =>
    color || 'var(--primary-second-button-background-color)'};
  text-transform: capitalize;
  margin-top: ${({ mTop }: any) => mTop || 0}px;
  margin-bottom: ${({ mb }: any) => mb || 0}px;
`;

export const Typography: any = styled.p`
  padding: ${({ p }: any) => p || 0}px;
  font-weight: ${({ weight }: any) => weight || 500};
  color: ${({ color }: any) => color || 'var(--card-text-color)'} !important;
  text-align: ${({ position }: any) => position || 'left'};
  line-height: ${({ lineHeight }: any) =>
    lineHeight ? `${lineHeight}px` : 'normal'};
  width: ${({ width }: any) => (width ? '100%' : 'auto')};
  margin-left: ${({ ml }: any) => ml || 0}px;
  margin-right: ${({ mr }: any) => mr || 0}px;
  word-break: ${({ breakWord }: any) => breakWord};
  margin-top: ${({ mt }: any) => mt || 0}px;
  margin-bottom: ${({ mb }: any) => mb || 0}px;
  padding-bottom: ${({ pb }: any) => pb || 0}px;
  opacity: ${({ opacity }: any) => opacity || 1};
  z-index: ${({ zIndex }: any) => zIndex};
  background-color: ${({ bg }: any) => bg};
  border-top: ${({ borderTop }: any) => borderTop};
  border-bottom: ${({ borderBottom }: any) => borderBottom};
  font-family: ${({ ff }: any) => ff};
  text-transform: ${({ textTransform }: any) => textTransform || 'none'};
  ${({ nowrap }: any) =>
    nowrap
      ? `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`
      : ''};
  text-decoration: ${({ textDecoration }: any) => textDecoration || 'none'};
  white-space: ${({ whiteSpace }: any) => whiteSpace || 'unset'};

  // xs
  @media (min-width: 320px) {
    font-size: ${({ xs, xlg, lg, md, sm, size }: any) =>
      xs || xlg || lg || md || sm || size || 14}px;
  }

  // sm
  @media (min-width: 900px) {
    font-size: ${({ sm, xlg, lg, md, size }: any) =>
      sm || xlg || lg || md || size || 14}px;
  }

  // md
  @media (min-width: 1200px) {
    font-size: ${({ md, xlg, lg, size }: any) =>
      md || xlg || lg || size || 14}px;
  }

  // lg
  @media (min-width: 1400px) {
    font-size: ${({ lg, xlg, size }: any) => lg || xlg || size || 14}px;
  }

  // xlg
  @media (min-width: 1536px) {
    font-size: ${({ xlg, size }: any) => xlg || size || 14}px;
  }
`;

export const Span: any = styled.span`
  font-size: ${({ size }: any) => size || 14}px;
  font-weight: ${({ weight }: any) => weight || 500};
  color: ${({ color }: any) => color || 'var(--black-color)'};
  margin-left: ${({ ml }: any) => ml || 0}px;
  margin-right: ${({ mr }: any) => mr || 0}px;
  text-decoration: ${({ textDecoration }: any) => textDecoration || 'none'};

  // xs
  @media (min-width: 320px) {
    font-size: ${({ xs, xlg, lg, md, sm, size }: any) =>
      xs || xlg || lg || md || sm || size || 14}px;
  }

  // sm
  @media (min-width: 900px) {
    font-size: ${({ sm, xlg, lg, md, size }: any) =>
      sm || xlg || lg || md || size || 14}px;
  }

  // md
  @media (min-width: 1200px) {
    font-size: ${({ md, xlg, lg, size }: any) =>
      md || xlg || lg || size || 14}px;
  }

  // lg
  @media (min-width: 1400px) {
    font-size: ${({ lg, xlg, size }: any) => lg || xlg || size || 14}px;
  }

  // xlg
  @media (min-width: 1536px) {
    font-size: ${({ xlg, size }: any) => xlg || size || 14}px;
  }
`;

export const InputStyled: any = css`
  &&.MuiFormControl-root {
    margin-bottom: ${({ mb }: any) => mb || 0}px;

    width: 100%;

    input {
      padding: 0;
      ${placeholder};
    }

    .MuiOutlinedInput-root,
    .MuiInputLabel-root {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }

    .MuiInputBase-root.MuiOutlinedInput-root {
      color: ${({ error }: any) =>
        error ? 'var(--error-text-color)' : 'var(--input-text-color)'};
      width: 100%;
      padding: 16px;
      font-family: unset;
      ${placeholder};
    }
    .MuiInputLabel-root {
      top: ${({ ltop }: any) => ltop || 0}px;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ borderColor, error }: any) =>
        error
          ? 'var(--error-text-color)'
          : borderColor || 'var(--input-border-color)'};
      border-radius: ${({ radius }: any) => radius || 6}px;
    }

    .MuiInputLabel-root.Mui-focused {
      color: ${({ color, error }: any) =>
        error
          ? 'var(--error-text-color) !important'
          : color || 'var(--primary-button-background-color) !important'};
    }

    .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused
      .MuiOutlinedInput-notchedOutline {
      border-color: ${({ borderColor, error }: any) =>
        error
          ? 'var(--error-text-color)'
          : borderColor || 'var(--primary-button-background-color)'};
      border-width: 2px;
    }

    .MuiButtonBase-root.MuiIconButton-root {
      margin-right: -8px;
    }

    svg {
      fill: var(--primary-button-background-color);
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const SmallTextField = css`
  .MuiOutlinedInput-root,
  .MuiInputLabel-root {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px !important;
  }
`;
export const SelectBoxStyled = css`
  margin-bottom: ${({ mb }: any) => mb || 24}px;
  width: 100%;

  &&.multiple-section {
    .MuiInputBase-root.MuiOutlinedInput-root {
      min-height: ${({ height }: any) => height || 54}px;
      height: auto;
    }
  }

  .MuiOutlinedInput-root,
  .MuiInputLabel-root {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ borderColor, error }: any) =>
      error
        ? 'var(--error-text-color)'
        : borderColor || 'var(--input-border-color)'};
    border-radius: 6px;
  }

  .MuiInputBase-root.MuiOutlinedInput-root {
    background-color: ${({ backgroundColor, disabled }: any) =>
      backgroundColor
        ? 'var(--secondary-button-background-color)'
        : 'var(--input-background-color)'};
    color: ${({ error, textColor }: any) =>
      error
        ? 'var(--error-text-color)'
        : textColor || 'var(--input-text-color)'};
    height: ${({ height }: any) => height || 54}px;
    padding: 12px 15px;
    padding-top: ${({ pt }: any) => pt};
    ${placeholder};
  }

  .MuiAutocomplete-input {
    padding: 0 !important;
    ${placeholder};

    &::placeholder {
      color: ${({ textColor }: any) =>
        textColor || 'var(--placeholder-text-color)'};
    }
  }

  .MuiSvgIcon-root {
    fill: ${({ iconColor }: any) => iconColor || 'var(--input-border-color)'};
  }

  .MuiBox-root {
    height: 20px;
  }

  .MuiInputBase-root.MuiOutlinedInput-root.Mui-disabled
    .MuiOutlinedInput-notchedOutline,
  .MuiInputBase-root.MuiOutlinedInput-root:hover
    .MuiOutlinedInput-notchedOutline {
    border-color: ${({ borderColor, error }: any) =>
      error
        ? 'var(--error-text-color)'
        : borderColor || 'var(--input-border-color)'};
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${({ color, error }: any) =>
      error
        ? 'var(--error-text-color) !important'
        : color || 'var(--primary-button-background-color) !important'};
  }

  .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${({ borderColor, error }: any) =>
      error
        ? 'var(--error-text-color)'
        : borderColor || 'var(--primary-button-background-color)'};
    border-width: 2px;
  }

  .MuiInputBase-root.MuiOutlinedInput-root {
    grid-gap: 10px;
  }

  .MuiButtonBase-root.MuiChip-root {
    border-radius: 6px;
    background: var(--select-background-icon-color);
    color: var(--primary-second-button-background-color);
    padding: 11px 15px;
    font-size: 14px;
    font-weight: 400;
    font-family: unset;
    height: 36px;
    margin: 0;

    .MuiChip-label {
      padding: 0;
      padding-right: 15px;
    }

    .MuiChip-deleteIcon {
      margin: 0;
    }
    .MuiFormLabel-root {
      font-weight: 400;
      font-size: 14px;
      color: var(--placeholder-text-color);
      line-height: 1.8375em !important;
    }
  }
`;

export const TableContainerStyled = css`
  margin-bottom: ${({ mb }: any) => mb || 0}px;

  &&.MuiTableContainer-root {
    box-shadow: none;
    border: 1px solid var(--table-background-color);

    .MuiTableHead-root {
      .MuiTableCell-root {
        padding: 8px 16px;
        font-size: ${({ fontSize }: any) => fontSize}px;
        border-bottom: 0;
        font-weight: 500;
        color: var(--primary-second-button-background-color);
        font-family: unset;
      }
    }

    .MuiTableBody-root {
      .MuiTableRow-root:nth-of-type(odd) {
        background-color: var(--table-background-color);
      }

      .MuiTableCell-root {
        padding: 8px 16px;
        font-size: ${({ fontSize }: any) => fontSize}px;
        border-bottom: 0;
        font-weight: 500;
        color: var(--dark-dray-text-color);
        font-family: unset;
      }
    }

    .MuiButtonBase-root.MuiTableSortLabel-root.Mui-active {
      color: var(--primary-second-button-background-color);

      &:hover {
        opacity: 1;
      }
    }

    .MuiButtonBase-root.MuiTableSortLabel-root {
      color: var(--primary-second-button-background-color);

      &:hover {
        opacity: 0.5;
      }

      svg {
        fill: var(--primary-second-button-background-color);
      }
    }
  }
`;

export const DateTimePicker = css`
  margin-bottom: ${({ mb }: any) => mb || 0}px !important;
  position: relative;
  width: 100%;

  .clear-icon {
    position: absolute;
    top: 50%;
    right: 42px;
    padding: 4px;
    transform: translate(0%, -50%);

    svg {
      width: 0.8em;
      height: 0.8em;
      fill: var(--placeholder-text-color);
    }
  }

  .calendar-icon {
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translate(0%, -50%);
    padding: 0;
    pointer-events: none;

    svg {
      width: 1em;
      height: 1em;
      fill: var(--placeholder-text-color);
    }
  }
`;
