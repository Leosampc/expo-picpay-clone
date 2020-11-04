import React from 'react';
import styled from 'styled-components/native';
import { Layout, Colors } from '#/constants';

const Wrapper = styled.SafeAreaView`
  background-color: ${Colors.blackColor};
  flex: 1;
`;

const ScrollView = styled.ScrollView``;

const Header = styled.View`
  height: ${Layout.normalize(50)}px;
  width: ${Layout.windowWidth}px;
  padding: 0 ${Layout.normalize(16)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default ({ children, headerComponent, float, ...props }) => (
  <Wrapper>
    <ScrollView {...props}>
      <Header
        style={{ position: float ? 'absolute' : 'relative', zIndex: 99999 }}
      >
        {headerComponent()}
      </Header>
      {children}
    </ScrollView>
  </Wrapper>
);
