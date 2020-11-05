import styled from 'styled-components/native';
import { Colors, Layout } from '#/constants';

export const CardContainer = styled.View`
  background-color: ${Colors.tertiaryGrayColor};
  border-radius: ${Layout.normalize(8)}px;
  margin-top: ${Layout.normalize(20)}px;
  padding: ${Layout.normalize(16)}px;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
  color: ${Colors.whiteColor};
  font-size: 16px;
  margin-left: ${Layout.normalize(16)}px;
`;
export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: ${Layout.normalize(20)}px;
`;

export const UserName = styled.Text`
  color: ${Colors.whiteColor};
  font-size: 20px;
`;

export const CardFooter = styled.View`
  margin-top: ${Layout.normalize(15)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: ${Colors.primaryRedColor};
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  width: ${Layout.normalize(2)}px;
  height: ${Layout.normalize(13)}px;
  margin: 0 ${Layout.normalize(10)}px;
`;

export const Date = styled.Text`
  color: ${Colors.whiteColor};
  margin-left: ${Layout.normalize(5)}px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  margin-left: ${Layout.normalize(15)}px;
  flex-direction: row;
`;

export const OptionLabel = styled.Text`
  color: ${Colors.whiteColor};
  font-size: 14px;
  margin-left: ${Layout.normalize(5)}px;
`;
