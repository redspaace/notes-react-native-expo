import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.smallMargin,
    paddingTop: metrics.bigMargin,
    backgroundColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  icon: {
    color: colors.lighter
  },

  date: {
    fontSize: fonts.biggerSize,
    color: colors.greenDefault,
    fontWeight: 'bold'
  },

  null: {
    color: colors.light
  }
})

export default styles;