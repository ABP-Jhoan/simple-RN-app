import { StyleSheet, LogBox } from 'react-native';
import {MainStack} from './navigation/MainStack'

//! Desactiva todas las advertencias.
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs()

export default function App() {
  return (
    <MainStack/>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color:'#fff',
    marginBottom: 12
  }
});
