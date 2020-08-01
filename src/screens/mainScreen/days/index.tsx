import React,{ useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Days() {
  const todayDay = new Date().getDate();
  const todayWeek = new Date().getDay();
  const weekList = ['Dom', 'Seg', 'Terç', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  


  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.todayDate}>{weekList[0]}</Text>
        <Text style={styles.todayDate}>{weekList[1]}</Text>
        <Text style={styles.todayDate}>{weekList[2]}</Text>
        <Text style={styles.todayDate}>{weekList[3]}</Text>
        <Text style={styles.todayDate}>{weekList[4]}</Text>
        <Text style={styles.todayDate}>{weekList[5]}</Text>
        <Text style={[styles.todayDate, styles.today]}>{weekList[6]}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.todayDate}>{todayDay-6}</Text>
        <Text style={styles.todayDate}>{todayDay-5}</Text>
        <Text style={styles.todayDate}>{todayDay-4}</Text>
        <Text style={styles.todayDate}>{todayDay-3}</Text>
        <Text style={styles.todayDate}>{todayDay-2}</Text>
        <Text style={styles.todayDate}>{todayDay-1}</Text>
        <Text style={[styles.todayDate, styles.today]}>{todayDay}</Text>
      </View>
    </View>
  );
}