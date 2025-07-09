import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useCount } from '../components/CountContext';

export type HomeStackParamList = {
  Home: undefined;
  Detail: {
    message: string;
    id: number;
    time: string;
    count: number;
  };
};

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // Count context usage
  const { count, increment, decrement } = useCount();

  const handleGoToDetail = () => {
    navigation.navigate('Detail', {
      message: 'Xin chào từ Home! Đây là dữ liệu truyền qua param.',
      id: 123,
      time: new Date().toLocaleString(),
      count: count,
    });
  };

  return (
    <View style={styles.container}>
      <Feather name="home" size={64} color="#1976D2" style={styles.icon} />
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>
        Nhấn nút bên dưới để chuyển sang màn hình Chi tiết và truyền dữ liệu
        (message, id, time).
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGoToDetail}>
        <Feather
          name="arrow-right-circle"
          size={20}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.buttonText}>Đi tới màn hình Chi tiết</Text>
      </TouchableOpacity>

      {/* Count display and controls */}
      <View style={styles.countContainer}>
        <Text style={styles.countLabel}>Count Context: {count}</Text>
        <View style={styles.countButtons}>
          <TouchableOpacity style={styles.countButton} onPress={decrement}>
            <Text style={styles.countButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.countButton} onPress={increment}>
            <Text style={styles.countButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  countContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  countLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 12,
  },
  countButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  countButton: {
    backgroundColor: '#1976D2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 8,
    elevation: 1,
  },
  countButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
