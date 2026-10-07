import { StyleSheet, Text, View } from 'react-native';

export default function Tabla() {
  return (
    <View style={styles.container} className="container">
      <Text style={styles.title} className="tablas">
        Tabla
      </Text>

      <Text>Nombre | Edad | Carrera</Text>
      <Text>Carlos | 27 | Sistemas</Text>
      <Text>Juan | 25 | Ingeniería</Text>
      <Text>Pedro | 30 | Computación</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});