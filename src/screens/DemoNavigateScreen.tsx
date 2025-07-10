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

type DemoNavigateScreenNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  'DemoNavigate'
>;
type DemoNavigateScreenRouteProp = RouteProp<
  SettingsStackParamList,
  'DemoNavigate'
>;

const DemoNavigateScreen: React.FC = () => {
  const navigation = useNavigation<DemoNavigateScreenNavigationProp>();
  const route = useRoute<DemoNavigateScreenRouteProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="navigation"
          size={64}
          color="#2196F3"
          style={styles.icon}
        />
        <Text style={styles.title}>Navigate Demo</Text>
        <Text style={styles.subtitle}>Smart navigation behavior</Text>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{route.params?.message}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Navigate Behavior:</Text>
        <Text style={styles.infoText}>
          • If screen exists in stack, goes back to it
        </Text>
        <Text style={styles.infoText}>
          • If screen doesn't exist, creates new one
        </Text>
        <Text style={styles.infoText}>
          • Prevents duplicate screens in stack
        </Text>
        <Text style={styles.infoText}>• More predictable navigation flow</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DemoNavigate', {
              message: 'Navigating to same screen again!',
            })
          }
        >
          <Feather name="navigation" size={20} color="#fff" />
          <Text style={styles.buttonText}>Navigate Again (Same Screen)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() =>
            navigation.navigate('DemoPush', {
              message: 'Navigating to different screen',
            })
          }
        >
          <Feather name="arrow-right" size={20} color="#1976D2" />
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Navigate to Push Screen
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.dangerButton]}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} color="#fff" />
          <Text style={styles.buttonText}>Go Back</Text>
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
    color: '#2196F3',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  messageContainer: {
    backgroundColor: '#E3F2FD',
    padding: 16,
    borderRadius: 12,
    marginVertical: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  messageText: {
    fontSize: 16,
    color: '#1565C0',
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
    backgroundColor: '#2196F3',
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

export default DemoNavigateScreen;
