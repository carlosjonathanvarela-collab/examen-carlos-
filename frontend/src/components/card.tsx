import { StyleSheet, Text, View } from 'react-native';

export default function Card({ title, description }: { title: string; description: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 3 },
  title: { fontWeight: 'bold', fontSize: 18, marginBottom: 4 },
});