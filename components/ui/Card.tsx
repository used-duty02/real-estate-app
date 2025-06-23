import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  useColorScheme,
  Platform,
} from 'react-native';
import Colors from '../../constants/Colors';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'elevated' | 'outlined' | 'filled';
}

export default function Card({
  children,
  style,
  variant = 'elevated',
}: CardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const getCardStyles = (): ViewStyle => {
    let cardStyle: ViewStyle = {
      ...styles.card,
    };

    switch (variant) {
      case 'outlined':
        cardStyle = {
          ...cardStyle,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.border,
          ...Platform.select({
            ios: {
              shadowOpacity: 0,
            },
            android: {
              elevation: 0,
            },
            web: {
              boxShadow: 'none',
            },
          }),
        };
        break;
      case 'filled':
        cardStyle = {
          ...cardStyle,
          backgroundColor: colors.card,
          ...Platform.select({
            ios: {
              shadowOpacity: 0,
            },
            android: {
              elevation: 0,
            },
            web: {
              boxShadow: 'none',
            },
          }),
        };
        break;
      default:
        cardStyle = {
          ...cardStyle,
          backgroundColor: colors.card,
          ...colors.shadow,
        };
    }

    return cardStyle;
  };

  return <View style={[getCardStyles(), style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    margin: 8,
  },
});