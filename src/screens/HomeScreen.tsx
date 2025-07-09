import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Home: undefined;
  Detail: { message: string; id: number; time: string };
};

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleGoToDetail = () => {
    navigation.navigate('Detail', {
      message: 'Xin chào từ Home! Đây là dữ liệu truyền qua param.',
      id: 123,
      time: new Date().toLocaleString(),
    });
  };

  return (
    <View style={styles.container}>
      <Icon name="home" size={64} color="#1976D2" style={styles.icon} />
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>
        Nhấn nút bên dưới để chuyển sang màn hình Chi tiết và truyền dữ liệu
        (message, id, time).
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGoToDetail}>
        <Icon
          name="arrow-right-circle"
          size={20}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.buttonText}>Đi tới màn hình Chi tiết</Text>
      </TouchableOpacity>
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
    color: '#1976D2',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
