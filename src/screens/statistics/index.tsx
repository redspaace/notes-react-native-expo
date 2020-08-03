import React from 'react';
import { View } from 'react-native';
import { colors } from '../../styles';

import Header from './header';

export default function Statistics() {
  return(
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <Header />
    </View>
  );
}