import React,{ useState } from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Header() {
  const todayDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  return(
    <View style={styles.container}>
      <Feather name='settings' size={28} style={styles.icon}/>
      <Text style={styles.date}>{todayDate} de {months[currentMonth]}</Text>
      <Text style={styles.null}>null</Text>
    </View>
  );
}

