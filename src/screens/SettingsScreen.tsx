import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';

type SettingsStackParamList = {
  Settings: undefined;
  DemoPush: { message: string };
  DemoNavigate: { message: string };
  DemoPop: { message: string };
  DemoGoBack: { message: string };
};

type SettingsScreenNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  'Settings'
>;

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const route = useRoute();
  const [navigationHistory, setNavigationHistory] = useState<string[]>([]);

  const addToHistory = (action: string) => {
    setNavigationHistory(prev => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${action}`,
    ]);
  };

  const clearHistory = () => {
    setNavigationHistory([]);
  };

  const handlePush = () => {
    addToHistory('push() - Adds new screen to stack');
    navigation.push('DemoPush', {
      message: 'This screen was pushed onto the stack',
    });
  };

  const handleNavigate = () => {
    addToHistory(
      'navigate() - Navigates to existing screen or creates new one',
    );
    navigation.navigate('DemoNavigate', {
      message: 'This screen was navigated to',
    });
  };

  const handlePop = () => {
    addToHistory('pop() - Removes current screen from stack');
    if (navigation.canGoBack()) {
      navigation.pop();
    } else {
      Alert.alert('Cannot Pop', 'No screens to pop back to');
    }
  };

  const handleGoBack = () => {
    addToHistory('goBack() - Goes back to previous screen');
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert('Cannot Go Back', 'No previous screen to go back to');
    }
  };

  const handlePopToTop = () => {
    addToHistory('popToTop() - Goes back to first screen in stack');
    navigation.popToTop();
  };

  const handleReplace = () => {
    addToHistory('replace() - Replaces current screen');
    navigation.replace('DemoPush', {
      message: 'This screen replaced the previous one',
    });
  };

  const handleReset = () => {
    addToHistory('reset() - Resets entire navigation state');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Settings' }],
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="settings"
          size={64}
          color="#F9A825"
          style={styles.icon}
        />
        <Text style={styles.title}>Navigation Demo</Text>
        <Text style={styles.subtitle}>
          Explore different navigation methods
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Navigation Methods</Text>

        <TouchableOpacity style={styles.button} onPress={handlePush}>
          <Feather name="plus-circle" size={20} color="#fff" />
          <Text style={styles.buttonText}>Push (Add to Stack)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Feather name="navigation" size={20} color="#fff" />
          <Text style={styles.buttonText}>Navigate (Smart Navigation)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePop}>
          <Feather name="minus-circle" size={20} color="#fff" />
          <Text style={styles.buttonText}>Pop (Remove Current)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Feather name="arrow-left" size={20} color="#fff" />
          <Text style={styles.buttonText}>Go Back (Previous Screen)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() =>
            navigation.navigate('DemoPop', { message: 'Demo of pop() method' })
          }
        >
          <Feather name="minus-square" size={20} color="#FF9800" />
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Demo Pop Screen
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() =>
            navigation.navigate('DemoGoBack', {
              message: 'Demo of goBack() method',
            })
          }
        >
          <Feather name="arrow-left-circle" size={20} color="#9C27B0" />
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Demo GoBack Screen
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handlePopToTop}
        >
          <Feather name="home" size={20} color="#1976D2" />
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Pop to Top
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handleReplace}
        >
          <Feather name="refresh-cw" size={20} color="#1976D2" />
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Replace Current
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.dangerButton]}
          onPress={handleReset}
        >
          <Feather name="rotate-ccw" size={20} color="#fff" />
          <Text style={styles.buttonText}>Reset Navigation</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.historyHeader}>
          <Text style={styles.sectionTitle}>Navigation History</Text>
          <TouchableOpacity onPress={clearHistory} style={styles.clearButton}>
            <Feather name="trash-2" size={16} color="#666" />
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.historyContainer}>
          {navigationHistory.length === 0 ? (
            <Text style={styles.emptyText}>No navigation actions yet</Text>
          ) : (
            navigationHistory.map((action, index) => (
              <View key={index} style={styles.historyItem}>
                <Feather name="clock" size={14} color="#666" />
                <Text style={styles.historyText}>{action}</Text>
              </View>
            ))
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current Route Info</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Route Name: {route.name}</Text>
          <Text style={styles.infoText}>
            Can Go Back: {navigation.canGoBack() ? 'Yes' : 'No'}
          </Text>
          <Text style={styles.infoText}>
            Stack Depth: {navigationHistory.length}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingTop: 40,
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
  section: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1976D2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
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
    marginLeft: 12,
  },
  secondaryButtonText: {
    color: '#1976D2',
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  clearButtonText: {
    color: '#666',
    fontSize: 14,
    marginLeft: 4,
  },
  historyContainer: {
    maxHeight: 200,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  historyText: {
    color: '#333',
    fontSize: 14,
    marginLeft: 8,
    flex: 1,
  },
  emptyText: {
    color: '#666',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 20,
  },
  infoContainer: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
  },
  infoText: {
    color: '#333',
    fontSize: 14,
    marginBottom: 4,
  },
});

export default SettingsScreen;
