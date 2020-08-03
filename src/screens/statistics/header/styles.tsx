import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    alignItems: 'center'
  },

  text: {
    color: colors.lighter,
    fontSize: fonts.defaultSize
  }
})

export default styles;