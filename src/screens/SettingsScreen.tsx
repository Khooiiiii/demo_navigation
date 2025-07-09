import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Feather name="settings" size={64} color="#F9A825" style={styles.icon} />
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Tuỳ chỉnh ứng dụng của bạn tại đây.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F9A825',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 32,
    textAlign: 'center',
  },
});

export default SettingsScreen;
