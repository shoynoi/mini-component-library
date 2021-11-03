/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const isCompleted = value >= 100
  const sizes = SIZES[size]
  return (
    <Wrapper style={sizes}>
      <Progress
        value={value}
        isCompleted={isCompleted}
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={value} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  )
};

const SIZES = {
  small: {
    '--height': '8px',
    '--border-radius': '4px'
  },
  medium: {
    '--height': '12px',
    '--border-radius': '4px'
  },
  large: {
    '--height': '24px',
    '--border-radius': '8px',
    'padding': '4px'
  }
}

const Wrapper = styled.div`
  max-width: 370px;
  height: var(--height);
  border-radius: var(--border-radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value + '%'};
  max-width: 100%;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${p => p.isCompleted ? '4px' : '0px'};
  border-bottom-right-radius: ${p => p.isCompleted ? '4px' : '0px'};
`

export default ProgressBar;
