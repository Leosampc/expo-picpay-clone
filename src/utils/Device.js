import { Dimensions, Platform } from 'react-native';

export const isIPhoneX = () => {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;

  const XSMAX_WIDTH = 414;
  const XSMAX_HEIGHT = 896;

  const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

  let IS_IPHONE_X = false;

  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    IS_IPHONE_X =
      (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
      (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT);
  }

  return IS_IPHONE_X;
};

export const getStatusBarHeight = () => {
  return Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: 0,
  });
};

export const getIPhoneXIndicatorHeight = () => {
  if (isIPhoneX()) {
    return 34;
  }
  return 0;
};
