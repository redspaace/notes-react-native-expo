import React from 'react';
import { View } from 'react-native';

import Habit from './habit';
import styles from './styles';


export default function HabitList() {
  return(
    <View style={styles.container}>
      <Habit />
    </View>
  );
}