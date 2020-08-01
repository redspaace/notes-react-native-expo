import React from 'react';
import { View, ScrollView } from 'react-native';
import { colors } from '../../styles';

import Header from './header';
import Days from './days';
import HabitList from './habitList';
import AddHabit from './addHabit';

export default function MainScreen() {
  return(
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <Header />
      <Days />
      <ScrollView>
        <HabitList />
        <AddHabit />
      </ScrollView>
    </View>
  );
}



