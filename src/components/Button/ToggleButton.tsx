import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styled from '@emotion/styled';

const ToggleButtonWrapper = styled(ToggleButton)`
  &&.MuiToggleButton-root {
    border: 1px solid #959ca9;
    color: var(--placeholder-text-color);
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
  &&.MuiToggleButton-root.Mui-selected {
    background-color: var(--primary-button-background-color);
    color: #ffffff;
    border: 1px solid var(--primary-button-background-color);
  }
`;

interface Option {
  value: string;
  label: string;
}

interface Props {
  value: string | null;
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => void;
  options: Option[];
}

const StyledToggleButton: React.FC<Props> = ({
  value,
  onChange,
  options,
  ...restProps
}) => {
  const selectedValue = value ?? options[0]?.value;

  return (
    <ToggleButtonGroup
      value={selectedValue}
      exclusive
      onChange={onChange}
      aria-label='Platform'
    >
      {options.map((option, index) => (
        <ToggleButtonWrapper key={index} value={option.value} {...restProps}>
          {option.label}
        </ToggleButtonWrapper>
      ))}
    </ToggleButtonGroup>
  );
};

export default StyledToggleButton;
