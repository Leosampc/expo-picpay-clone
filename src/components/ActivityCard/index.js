import React from 'react';
import { Helpers } from '#/utils';
import { Colors } from '#/constants';
import { Icon } from '#/components';
import {
  CardContainer,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './StyledComponents';

export default ({
  avatar,
  username,
  name,
  value,
  dateText,
  commentsCount,
  likesCount,
}) => {
  return (
    <CardContainer>
      <CardHeader>
        <Avatar source={avatar} />
        <Description>
          <Bold>Você</Bold> pagou o <Bold>{username}</Bold>
        </Description>
      </CardHeader>
      <CardBody>
        <UserName>{name}</UserName>
      </CardBody>
      <CardFooter>
        <Details>
          <Value>R$ {Helpers.toCurrency(value)}</Value>
          <Divider />
          <Icon iconSet="feather" name="lock" color={Colors.whiteColor} />
          <Date>{dateText}</Date>
        </Details>
        <Actions>
          <Option>
            <Icon
              iconSet="material_community"
              name="comment-outline"
              size="14"
              color={Colors.whiteColor}
            />
            <OptionLabel>{commentsCount}</OptionLabel>
          </Option>
          <Option>
            <Icon
              iconSet="antd"
              name="hearto"
              size="14"
              color={Colors.whiteColor}
            />
            <OptionLabel>{likesCount}</OptionLabel>
          </Option>
        </Actions>
      </CardFooter>
    </CardContainer>
  );
};
