import React,{ useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Days() {
  const weekList = ['Dom', 'Seg', 'Terç', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  
  function calculatePreviouDays(num: number) {
    let numberDaysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = new Date().getDate();
    let month = new Date().getMonth();

    if(day - num <= 0) {
      day += numberDaysMonth[month-1];
      day -=num;
    } else {
      day -= num;
    }
    
    return day;
  }

  function calculatePreviouWeeks(num: number) {

  }

  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.todayDate}>{calculatePreviouDays(6)}</Text>
        <Text style={styles.todayDate}>{calculatePreviouDays(5)}</Text>
        <Text style={styles.todayDate}>{calculatePreviouDays(4)}</Text>
        <Text style={styles.todayDate}>{calculatePreviouDays(3)}</Text>
        <Text style={styles.todayDate}>{calculatePreviouDays(2)}</Text>
        <Text style={styles.todayDate}>{calculatePreviouDays(1)}</Text>
        <Text style={styles.todayDate}>{calculatePreviouDays(0)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.todayDate}>{}</Text>
        <Text style={styles.todayDate}>{}</Text>
        <Text style={styles.todayDate}>{}</Text>
        <Text style={styles.todayDate}>{}</Text>
        <Text style={styles.todayDate}>{}</Text>
        <Text style={styles.todayDate}>{}</Text>
        <Text style={[styles.todayDate, styles.today]}>{}</Text>
      </View>
    </View>
  );
}