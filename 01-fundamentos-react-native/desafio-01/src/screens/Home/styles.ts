import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    padding: 24
  },
  containerInput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    backgroundColor: '#262626',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    color: '#fff',
  },
  button: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6
  },

  headerList:{
    width: '100%',
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerListTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  conatinerList: {
    width: '100%',
  }
})