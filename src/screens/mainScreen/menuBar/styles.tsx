import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.light,
    padding: metrics.smallerMargin
  },

  icon: {
    color: colors.lighter
  }
})

export default styles;