import React,{ useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


export default function Days() {
  
  //The function are used to order the weekly line correctly
  function calculatePreviouWeeks(num: number) {
    let nameDaysWeek = ['Dom', 'Seg', 'Terç', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    let day = new Date().getDay();

    if(day - num <= 0) {
      day += 7; //7 is the number of days in a week
    }
    day -= num;

    return nameDaysWeek[day];
  }

  //Do the same as the other, but with the names of the day of the week
  function calculatePreviouDays(num: number) {
    let numberDaysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //January, February, March, etc
    let day = new Date().getDate();
    let month = new Date().getMonth();

    if(day - num <= 0) {
      day += numberDaysMonth[month-1];
    }
    day -= num;

    return day;
  }

  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.day}>
          <Text style={styles.todayDate}>{calculatePreviouWeeks(6)}</Text>
          <Text style={styles.todayDate}>{calculatePreviouDays(6)}</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.todayDate}>{calculatePreviouWeeks(5)}</Text>
          <Text style={styles.todayDate}>{calculatePreviouDays(5)}</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.todayDate}>{calculatePreviouWeeks(4)}</Text>
          <Text style={styles.todayDate}>{calculatePreviouDays(4)}</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.todayDate}>{calculatePreviouWeeks(3)}</Text>
          <Text style={styles.todayDate}>0{calculatePreviouDays(3)}</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.todayDate}>{calculatePreviouWeeks(2)}</Text>
          <Text style={styles.todayDate}>0{calculatePreviouDays(2)}</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.todayDate}>{calculatePreviouWeeks(2)}</Text>
          <Text style={styles.todayDate}>0{calculatePreviouDays(1)}</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.todayDate}>{calculatePreviouWeeks(0)}</Text>
          <Text style={styles.todayDate}>0{calculatePreviouDays(0)}</Text>
        </View>
      </View>
    </View>
  );
}