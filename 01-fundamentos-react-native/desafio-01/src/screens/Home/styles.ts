import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    padding: 32,
    height: 173,
  },
  containerList: {
    flex:1,
    width: '100%',
    position: 'relative',
    padding: 24,
    backgroundColor: '#1A1A1A'
  },
  containerInput:{
    position: 'absolute',
    alignSelf: 'center',
    top: -24,
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
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  },
  containerheaderListTitle:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerListTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  flatList: {
    width: '100%',
  }
})