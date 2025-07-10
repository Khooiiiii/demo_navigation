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

type DemoPopScreenNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  'DemoPop'
>;
type DemoPopScreenRouteProp = RouteProp<SettingsStackParamList, 'DemoPop'>;

const DemoPopScreen: React.FC = () => {
  const navigation = useNavigation<DemoPopScreenNavigationProp>();
  const route = useRoute<DemoPopScreenRouteProp>();

  const handlePop = () => {
    if (navigation.canGoBack()) {
      navigation.pop();
    } else {
      Alert.alert('Cannot Pop', 'No screens to pop back to');
    }
  };

  const handlePopMultiple = () => {
    if (navigation.canGoBack()) {
      navigation.pop(2); // Pop 2 screens
    } else {
      Alert.alert('Cannot Pop', 'Not enough screens to pop');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="minus-circle"
          size={64}
          color="#FF9800"
          style={styles.icon}
        />
        <Text style={styles.title}>Pop Demo</Text>
        <Text style={styles.subtitle}>Removing screens from stack</Text>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{route.params?.message}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Pop Navigation:</Text>
        <Text style={styles.infoText}>• Removes current screen from stack</Text>
        <Text style={styles.infoText}>• Can pop multiple screens at once</Text>
        <Text style={styles.infoText}>• More direct control over stack</Text>
        <Text style={styles.infoText}>• Useful for conditional navigation</Text>
      </View>

      <View style={styles.comparisonSection}>
        <Text style={styles.comparisonTitle}>Pop vs GoBack:</Text>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>pop():</Text>
          <Text style={styles.comparisonText}>
            Removes current screen, can pop multiple
          </Text>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>goBack():</Text>
          <Text style={styles.comparisonText}>
            Goes back one screen, more semantic
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePop}>
          <Feather name="minus-circle" size={20} color="#fff" />
          <Text style={styles.buttonText}>Pop (Remove Current)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handlePopMultiple}
        >
          <Feather name="minus-square" size={20} color="#FF9800" />
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Pop 2 Screens
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.infoButton]}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} color="#fff" />
          <Text style={styles.buttonText}>Go Back (Alternative)</Text>
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
    color: '#FF9800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  messageContainer: {
    backgroundColor: '#FFF3E0',
    padding: 16,
    borderRadius: 12,
    marginVertical: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  messageText: {
    fontSize: 16,
    color: '#E65100',
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
    color: '#FF9800',
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
    backgroundColor: '#FF9800',
    padding: 16,
    borderRadius: 8,
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF9800',
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
    color: '#FF9800',
  },
});

export default DemoPopScreen;
