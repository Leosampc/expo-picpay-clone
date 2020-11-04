import styled from 'styled-components/native';
import { Colors, Layout } from '#/constants';

export const Container = styled.View`
  margin-top: ${Layout.normalize(25)}px;
  padding: 0 ${Layout.normalize(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  color: ${Colors.whiteColor};
  font-size: 14px;
  font-weight: bold;
`;

export const HeaderTabContainer = styled.View``;

export const HeaderTabTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${Layout.normalize(100)}px;
`;

export const HeaderTabText = styled.Text`
  color: ${Colors.whiteColor};
  font-size: 14px;
  font-weight: bold;
`;

export const HeaderTabUnderline = styled.View`
  background-color: ${Colors.secondaryGreenColor};
  height: ${Layout.normalize(1.5)}px;
  border-radius: ${Layout.normalize(1.5)}px;
  margin: 0 ${Layout.normalize(2)}px;
`;
