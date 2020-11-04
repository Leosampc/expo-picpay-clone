import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Label } from './StyledComponents';
import { Colors } from '#/constants';

export default ({ onPress, focused }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Button
      colors={
        focused
          ? [Colors.whiteColor, Colors.primaryGreenColor]
          : [Colors.tertiaryGreenColor, Colors.primaryGreenColor]
      }
      start={[1, 0.2]}
    >
      <MaterialIcons
        name="attach-money"
        size={30}
        color={focused ? Colors.primaryGrayColor : Colors.whiteColor}
      />
      <Label focused={focused}>Pagar</Label>
    </Button>
  </TouchableWithoutFeedback>
);
