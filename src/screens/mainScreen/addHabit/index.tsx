import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function AddHabit() {
  return(
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons name='add-circle' size={44}  style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}