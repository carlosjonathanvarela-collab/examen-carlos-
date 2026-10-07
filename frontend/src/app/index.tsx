import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        primer parcial carlos 
      </Text>

      <Text style={styles.subtitle}>
        practica Reac-Expo
      </Text>
      <View style={styles.button} className="button">
        <Text style={styles.buttonText}>Ir a Tarjetas</Text>
      </View>
      
      <View style={styles.button} className="button">
        <Text style={styles.buttonText}>Ir a Tabla</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 20,
    marginBottom: 30,
  },

  button: {
    width: 240,
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#333',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

