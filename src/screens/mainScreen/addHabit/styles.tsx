import { StyleSheet } from 'react-native';
import { fonts, metrics, colors } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingBottom: metrics.defaultMargin,
    alignItems: 'center'
  },

  icon: {
    color: colors.greenDefault
  }
})

export default styles;