import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '300',
    color: 'black',
  },
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});
