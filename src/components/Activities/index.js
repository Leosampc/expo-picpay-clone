import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { Layout } from '#/constants';
import {
  Container,
  Header,
  HeaderTitle,
  HeaderTabContainer,
  HeaderTabTextContainer,
  HeaderTabText,
  HeaderTabUnderline as HeaderTabUnderlineComponent,
} from './StyledComponents';

const HeaderTabUnderline = Animated.createAnimatedComponent(
  HeaderTabUnderlineComponent
);

const Activities = () => {
  const [tabToValue, setTabToValue] = useState(0);
  const [tabAnimation] = useState(new Animated.Value(tabToValue));

  useEffect(() => {
    Animated.timing(tabAnimation, {
      toValue: Layout.normalize(tabToValue),
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [tabToValue]);

  const onPressTab = (value) => setTabToValue(value);

  const tabAnimationInterpolate = tabAnimation.interpolate({
    inputRange: [0, Layout.normalize(56)],
    outputRange: [
      Number(Layout.normalize(56) * 0.56),
      Number(Layout.normalize(56) * 0.67),
    ],
  });

  return (
    <Container>
      <Header>
        <HeaderTitle>Atividades</HeaderTitle>
        <HeaderTabContainer>
          <HeaderTabTextContainer>
            <HeaderTabText onPress={() => onPressTab(0)}>Todas</HeaderTabText>
            <HeaderTabText onPress={() => onPressTab(56)}>Minhas</HeaderTabText>
          </HeaderTabTextContainer>
          <HeaderTabUnderline
            style={{
              width: tabAnimationInterpolate,
              transform: [{ translateX: tabAnimation }],
            }}
          />
        </HeaderTabContainer>
      </Header>
    </Container>
  );
};

export default Activities;
