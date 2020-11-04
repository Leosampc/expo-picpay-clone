import React from 'react';
import ScreenContainer from '#/containers/ScreenContainer';
import { Colors } from '#/constants';
import { Icon, Suggestions, Activities } from '#/components';
import { BalanceContainer, BalanceTitle, Balance } from './StyledComponents';

import suggestionsMockData from '#/mock/suggestions';

const Home = () => {
  return (
    <ScreenContainer
      headerComponent={() => (
        <>
          <Icon
            iconSet="material_community"
            name="qrcode-scan"
            size="30"
            color={Colors.secondaryGreenColor}
          />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <Icon
            iconSet="antd"
            name="gift"
            size="30"
            color={Colors.secondaryGreenColor}
          />
        </>
      )}
    >
      <Suggestions data={suggestionsMockData} />
      <Activities />
    </ScreenContainer>
  );
};

export default Home;
