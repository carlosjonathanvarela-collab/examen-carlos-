import { StyleSheet, Text, View } from 'react-native';

export default function Tarjetas() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>Tarjeta 1</Text>
        <Text>Información de la primera tarjeta</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Tarjeta 2</Text>
        <Text>Información de la segunda tarjeta</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Tarjeta 3</Text>
        <Text>Información de la tercera tarjeta</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Tarjeta 4</Text>
        <Text>Información de la cuarta tarjeta</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  card: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#e5e7eb',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});