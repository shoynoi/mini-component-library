import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size]
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.iconSize + 'px'}}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'px',
          '--font-size': styles.fontSize + 'px',
          '--border-thickness': styles.borderThickness + 'px'
        }}
        {...delegated}
      />
    </Wrapper>
  )
};

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  outline-offset: 2px;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`

export default IconInput;
