import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from './HomeScreen';

type Props = NativeStackScreenProps<HomeStackParamList, 'Detail'>;

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { message, id, time } = route.params;
  return (
    <View style={styles.container}>
      <Icon name="info" size={64} color="#43A047" style={styles.icon} />
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
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Icon
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailScreen;
