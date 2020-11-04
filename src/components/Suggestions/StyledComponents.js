import styled from 'styled-components/native';
import { Layout, Colors } from '#/constants';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: Layout.normalize(16),
  },
}))`
  background-color: ${Colors.tertiaryGrayColor};
  height: ${Layout.normalize(130)}px;
`;

export const Option = styled.TouchableOpacity`
  width: ${Layout.normalize(80)}px;
  margin-right: ${Layout.normalize(16)}px;
  align-items: center;
`;
export const Image = styled.Image``;
export const Label = styled.Text`
  height: ${Layout.normalize(30)}px;
  color: ${Colors.whiteColor};
  font-weight: bold;
  margin-top: ${Layout.normalize(8)}px;
  font-size: 14px;
  text-align: center;
`;
