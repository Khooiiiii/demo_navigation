import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from './HomeScreen';
import { useCount } from '../components/CountContext';

type Props = NativeStackScreenProps<HomeStackParamList, 'Detail'>;

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { message, id, time, count: countParam } = route.params;
  const { count, increment, decrement } = useCount();

  return (
    <View style={styles.container}>
      <Feather name="info" size={64} color="#43A047" style={styles.icon} />
      <Text style={styles.title}>Detail Screen</Text>
      <Text style={styles.label}>Dữ liệu nhận được từ Home:</Text>
      <View style={styles.paramBox}>
        <Text style={styles.param}>
          <Text style={styles.paramKey}>message:</Text> {message}
        </Text>
        <Text style={styles.param}>
          <Text style={styles.paramKey}>id:</Text> {id}
        </Text>
        <Text style={styles.param}>
          <Text style={styles.paramKey}>time:</Text> {time}
        </Text>
        <Text style={styles.param}>
          <Text style={styles.paramKey}>count:</Text> {countParam}
        </Text>
      </View>
      <View style={{ justifyContent: 'space-between' }}>
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Feather
          name="arrow-left-circle"
          size={20}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.buttonText}>Quay lại Home</Text>
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
    color: '#43A047',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '600',
  },
  paramBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  param: {
    fontSize: 16,
    color: '#222',
    marginBottom: 6,
  },
  paramKey: {
    color: '#1976D2',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#43A047',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    elevation: 2,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  countContainer: {
    marginTop: 24,
  },
  countLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 12,
  },
  countButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  countButton: {
    backgroundColor: '#1976D2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    elevation: 2,
  },
  countButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailScreen;
