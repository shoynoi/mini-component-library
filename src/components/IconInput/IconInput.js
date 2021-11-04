import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    size: 16,
    strokeWidth: 1,
    borderWidth: 1,
    fontSize: 14,
    paddingLeft: 24,
  },
  large: {
    size: 21,
    strokeWidth: 2,
    borderWidth: 2,
    fontSize: 18,
    paddingLeft: 32,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size]
  return (
    <Wrapper style={{
      '--width': width + 'px',
      '--border-width': styles.borderWidth + 'px'
    }}>
      <IconWrapper style={{'--size': styles.size + 'px'}} htmlFor={label}>
        <Icon id={icon} size={styles.size} strokeWidth={styles.strokeWidth} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </IconWrapper>
      <TextInput
        type="text"
        id={label}
        placeholder={placeholder}
        style={{
          '--font-size': styles.fontSize + 'px',
          '--padding-left': styles.paddingLeft + 'px'
        }} />
    </Wrapper>
  )
};

const TextInput = styled.input`
  width: 100%;
  border: none;
  padding-left: var(--padding-left);
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
`

const IconWrapper = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--size);
  height: var(--size);
  color: ${COLORS.gray700}
`

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  border-bottom: solid var(--border-width) ${COLORS.black};
  
  ${TextInput}:focus {
    & {
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: 5px;
    }
  }
  
  &:hover {
    & > ${TextInput}, ${IconWrapper} {
      color: ${COLORS.black};
    }
  }
`

export default IconInput;
