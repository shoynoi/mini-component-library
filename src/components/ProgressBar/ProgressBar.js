/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={{
      '--radius': styles.radius + 'px',
      '--padding': styles.padding + 'px'
    }}>
      <BarWrapper>
        <Bar style={{
          '--width': value + '%',
          '--height': styles.height + 'px'
        }}/>
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  )
};

const STYLES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 24,
    radius: 8,
    padding: 4,
  }
}

const Wrapper = styled.div`
  border-radius: var(--radius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`

export default ProgressBar;
