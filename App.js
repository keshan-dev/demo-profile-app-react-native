import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const profile = {
  name: 'Diluka',
  email: 'diluka.w@nsbm.ac.lk',
  photo: 'https://i.pravatar.cc/300?img=12',
};

export default function App() {
  const [points, setPoints] = useState(0);

  function addPoint() {
    setPoints(points + 1);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.avatarArea}>
          <Image source={{ uri: profile.photo }} style={styles.avatar} />
          <Ionicons
            name="checkmark-circle"
            size={34}
            color="#2ecc40"
            style={styles.badge}
          />
        </View>

        <View style={styles.line} />

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{profile.name}</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={16} color="#444" />
          <Text style={styles.value}>{profile.email}</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={16} color="#444" />
          <Text style={styles.value}>{points}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.fab} onPress={addPoint}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    backgroundColor: '#111',
    paddingVertical: 14,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  avatarArea: {
    alignSelf: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#eee',
  },
  badge: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    backgroundColor: '#fff',
    borderRadius: 17,
  },
  line: {
    height: 1,
    backgroundColor: '#555',
    marginTop: 20,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 14,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabText: {
    color: '#fff',
    fontSize: 26,
  },
});
