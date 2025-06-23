import { Platform } from 'react-native';

export default {
  light: {
    primary: '#1A365D',
    secondary: '#E0B973',
    background: '#FFFFFF',
    card: '#F8F9FA',
    text: '#1A202C',
    border: '#E2E8F0',
    notification: '#FF4757',
    shadow: Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
      web: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
    }),
  },
  dark: {
    primary: '#E0B973',
    secondary: '#1A365D',
    background: '#121212',
    card: '#1E1E1E',
    text: '#F7FAFC',
    border: '#333333',
    notification: '#FF6B81',
    shadow: Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
      web: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
    }),
  },
};