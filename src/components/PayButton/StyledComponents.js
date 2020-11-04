import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Layout, Colors } from '#/constants';

export const Button = styled(LinearGradient)`
  width: ${Layout.normalize(60)}px;
  height: ${Layout.normalize(60)}px;
  border-radius: ${Layout.normalize(30)}px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${(props) => (props.focused ? Colors.blackColor : Colors.whiteColor)};
`;
