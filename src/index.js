import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './routes/Main/NavBar';
import Registro from './components/Registro';
import Login from './components/Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
  },
});

export default function Index() {
  return (
    <View style={styles.container} keyboardShouldPersistTaps='handled'>
        <NavBar />
    </View>
  );
}