import React from 'react';
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
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
  feather: {
    lib: Feather,
  },
};

export default ({ iconSet, size, ...props }) => {
  const { lib: Icon } = icons[iconSet];
  const iconSize = size ? Layout.normalize(size) : null;
  return <Icon {...props} size={iconSize} />;
};
