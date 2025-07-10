import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';

type SettingsStackParamList = {
  Settings: undefined;
  DemoPush: { message: string };
  DemoNavigate: { message: string };
  DemoPop: { message: string };
  DemoGoBack: { message: string };
};

type DemoPushScreenNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  'DemoPush'
>;
type DemoPushScreenRouteProp = RouteProp<SettingsStackParamList, 'DemoPush'>;

const DemoPushScreen: React.FC = () => {
  const navigation = useNavigation<DemoPushScreenNavigationProp>();
  const route = useRoute<DemoPushScreenRouteProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="plus-circle"
          size={64}
          color="#4CAF50"
          style={styles.icon}
        />
        <Text style={styles.title}>Push Demo</Text>
        <Text style={styles.subtitle}>
          This screen was pushed onto the stack
        </Text>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{route.params?.message}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Push Navigation:</Text>
        <Text style={styles.infoText}>
          • Always adds a new screen to the stack
        </Text>
        <Text style={styles.infoText}>
          • Creates a new instance even if screen exists
        </Text>
        <Text style={styles.infoText}>
          • Useful for creating multiple instances
        </Text>
        <Text style={styles.infoText}>
          • Can lead to deep navigation stacks
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.push('DemoPush', { message: 'Another pushed screen!' })
          }
        >
          <Feather name="plus-circle" size={20} color="#fff" />
          <Text style={styles.buttonText}>Push Another Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} color="#1976D2" />
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Go Back
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.dangerButton]}
          onPress={() => navigation.popToTop()}
        >
          <Feather name="home" size={20} color="#fff" />
          <Text style={styles.buttonText}>Pop to Top</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  messageContainer: {
    backgroundColor: '#E8F5E8',
    padding: 16,
    borderRadius: 12,
    marginVertical: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  messageText: {
    fontSize: 16,
    color: '#2E7D32',
    fontStyle: 'italic',
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#1976D2',
  },
  dangerButton: {
    backgroundColor: '#D32F2F',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  secondaryButtonText: {
    color: '#1976D2',
  },
});

export default DemoPushScreen;
