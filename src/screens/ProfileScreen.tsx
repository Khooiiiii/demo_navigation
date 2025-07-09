import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Icon name="user" size={64} color="#fff" style={styles.avatarIcon} />
      </View>
      <Text style={styles.name}>Nguyễn Văn A</Text>
      <Text style={styles.email}>nguyenvana@example.com</Text>
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
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#1976D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarIcon: {
    // nothing
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
});

export default ProfileScreen;
