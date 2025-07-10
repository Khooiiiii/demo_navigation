import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
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

type DemoGoBackScreenNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  'DemoGoBack'
>;
type DemoGoBackScreenRouteProp = RouteProp<
  SettingsStackParamList,
  'DemoGoBack'
>;

const DemoGoBackScreen: React.FC = () => {
  const navigation = useNavigation<DemoGoBackScreenNavigationProp>();
  const route = useRoute<DemoGoBackScreenRouteProp>();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert('Cannot Go Back', 'No previous screen to go back to');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          size={64}
          color="#9C27B0"
          style={styles.icon}
        />
        <Text style={styles.title}>GoBack Demo</Text>
        <Text style={styles.subtitle}>Semantic navigation back</Text>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{route.params?.message}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>GoBack Navigation:</Text>
        <Text style={styles.infoText}>• Goes back to previous screen</Text>
        <Text style={styles.infoText}>• More semantic and intuitive</Text>
        <Text style={styles.infoText}>• Handles hardware back button</Text>
        <Text style={styles.infoText}>• Standard navigation pattern</Text>
      </View>

      <View style={styles.comparisonSection}>
        <Text style={styles.comparisonTitle}>GoBack vs Pop:</Text>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>goBack():</Text>
          <Text style={styles.comparisonText}>
            Semantic, goes back one screen
          </Text>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>pop():</Text>
          <Text style={styles.comparisonText}>
            Technical, removes from stack
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Feather name="arrow-left" size={20} color="#fff" />
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.pop()}
        >
          <Feather name="minus-circle" size={20} color="#9C27B0" />
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Pop (Alternative)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.infoButton]}
          onPress={() =>
            navigation.navigate('DemoPush', { message: 'From GoBack screen' })
          }
        >
          <Feather name="plus-circle" size={20} color="#fff" />
          <Text style={styles.buttonText}>Navigate to Push Screen</Text>
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
    color: '#9C27B0',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  messageContainer: {
    backgroundColor: '#F3E5F5',
    padding: 16,
    borderRadius: 12,
    marginVertical: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#9C27B0',
  },
  messageText: {
    fontSize: 16,
    color: '#7B1FA2',
    fontStyle: 'italic',
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
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
  comparisonSection: {
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
  comparisonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  comparisonItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  comparisonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9C27B0',
    width: 80,
  },
  comparisonText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    lineHeight: 20,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9C27B0',
    padding: 16,
    borderRadius: 8,
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#9C27B0',
  },
  infoButton: {
    backgroundColor: '#2196F3',
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
    color: '#9C27B0',
  },
});

export default DemoGoBackScreen;
