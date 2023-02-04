import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 6,
    marginTop: 8,
    padding: 12,
  },
  checkedButton: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: '#5E60CE'
  },
  notCheckedButton: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#4EA8DE'
  },
  taskName: {
    flex: 1,
    textAlign: 'left',
    marginHorizontal: 8,
    color: "#fff",
    fontSize: 14
  },
  taskNameChecked: {
    flex: 1,
    textAlign: 'left',
    marginHorizontal: 8,
    color: "#808080",
    textDecorationLine: 'line-through',
    fontSize: 14
  },
});