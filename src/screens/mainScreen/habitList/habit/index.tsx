import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import server from '../../../../server.js';

import styles from './styles';

export default function Habit() {
  const Data = server;
  return(
    <>
      <FlatList 
        data={Data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text>Teeeeeeeest</Text>
          </View>
        )}
      />
    </>
  );
}