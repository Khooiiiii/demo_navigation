import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="info" size={64} color="#43A047" style={styles.icon} />
      <Text style={styles.title}>DemoNavigation App</Text>
      <Text style={styles.version}>Version 1.0.0</Text>
      <Text style={styles.desc}>
        Ứng dụng demo hệ thống điều hướng React Navigation: Drawer, Tab, Stack,
        truyền dữ liệu, context, icon đẹp.
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://reactnavigation.org/')}
        style={styles.linkBtn}
      >
        <Icon
          name="external-link"
          size={18}
          color="#1976D2"
          style={{ marginRight: 6 }}
        />
        <Text style={styles.linkText}>Tìm hiểu thêm về React Navigation</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#43A047',
    marginBottom: 4,
  },
  version: {
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
  },
  desc: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  linkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
  },
  linkText: {
    color: '#1976D2',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AboutScreen;
