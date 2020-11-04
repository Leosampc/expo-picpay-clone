import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.SafeAreaView`
  background-color: #000;
  flex: 1;
`;

export default ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);
