import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    margin: metrics.defaultMargin,
    padding: metrics.defaultMargin,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  title: {
    fontSize: fonts.bigSize,
    color: colors.words,
    fontWeight: 'bold'
  },

  icon: {
    color: '#007acc'
  },

  progressContainer: {
    alignItems: 'center'
  },

  progress: {
    color: '#007acc',
    fontSize: fonts.bigSize
  },

  progressText: {
    fontSize: fonts.defaultSize,
    color: colors.words
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default styles;