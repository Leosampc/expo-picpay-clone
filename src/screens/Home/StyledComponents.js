import styled from 'styled-components/native';
import { Colors } from '#/constants';

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: ${Colors.whiteColor};
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
