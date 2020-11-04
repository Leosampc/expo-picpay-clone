import { Dimensions, PixelRatio } from 'react-native';
import { getStatusBarHeight, getIPhoneXIndicatorHeight } from '#/utils/Device';

const { width, height } = Dimensions.get('window');

const getScale = (smallScreenScaling = 0.9, limitScale = true) => {
  let scale = height / 640;
  if (scale > 1 && limitScale) {
    scale = 1;
  } else if (scale < 1) {
    scale *= smallScreenScaling;
  }
  return scale;
};

const getNormalize = (size) => {
  const scale = width / 360;

  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default {
  windowWidth: width,
  windowHeight: height,
  hitSlop: { top: 10, left: 10, right: 10, bottom: 10 },
  largeHitSlop: { top: 15, left: 15, right: 15, bottom: 15 },
  statusBarHeight: getStatusBarHeight(),
  iphoneXIndicatorHeight: getIPhoneXIndicatorHeight(),
  isSmallDevice: width < 375,
  xsGutter: 4,
  smGutter: 8,
  mdGutter: 16,
  lgGutter: 24,
  xlGutter: 32,
  xxlGutter: 48,
  headerHeight: 56,
  tabBarHeight: 56,
  scale: getScale,
  normalize: getNormalize,
};
