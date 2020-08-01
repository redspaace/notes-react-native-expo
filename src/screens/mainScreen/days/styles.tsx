import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: metrics.defaultMargin,
    borderBottomWidth: 1,
    borderColor: colors.light
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center'
    
  },
  
  todayDate: {
    color: colors.lighter,
    fontSize: fonts.defaultSize,
    fontWeight: 'bold'
  },

  today: {
    color: colors.greenDefault
  }
})

export default styles;