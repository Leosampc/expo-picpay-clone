import React from 'react';
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { Layout } from '#/constants';

const icons = {
  antd: {
    lib: AntDesign,
  },
  ion: {
    lib: Ionicons,
  },
  material_community: {
    lib: MaterialCommunityIcons,
  },
  material: {
    lib: MaterialIcons,
  },
};

export default ({ iconSet, size, ...props }) => {
  const { lib: Icon } = icons[iconSet];
  const iconSize = Layout.normalize(size);
  return <Icon {...props} size={iconSize} />;
};
