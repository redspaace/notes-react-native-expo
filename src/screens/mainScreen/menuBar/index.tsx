import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, MaterialIcons, Fontisto, AntDesign } from '@expo/vector-icons';

import styles from './styles';

export default function MenuBar() {
  return(
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons name='today' size={32} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <SimpleLineIcons name='chart' size={26} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Fontisto name='check' size={23} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name='bars' size={33} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

