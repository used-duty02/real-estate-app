import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import Colors from '../../constants/Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  fullWidth = false,
}: ButtonProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const getButtonStyles = (): ViewStyle => {
    let buttonStyle: ViewStyle = {
      ...styles.button,
      ...(fullWidth && styles.fullWidth),
    };

    // Size styles
    switch (size) {
      case 'small':
        buttonStyle = { ...buttonStyle, ...styles.smallButton };
        break;
      case 'large':
        buttonStyle = { ...buttonStyle, ...styles.largeButton };
        break;
      default:
        buttonStyle = { ...buttonStyle, ...styles.mediumButton };
    }

    // Variant styles
    switch (variant) {
      case 'secondary':
        buttonStyle = {
          ...buttonStyle,
          backgroundColor: colors.secondary,
        };
        break;
      case 'outline':
        buttonStyle = {
          ...buttonStyle,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.primary,
        };
        break;
      case 'ghost':
        buttonStyle = {
          ...buttonStyle,
          backgroundColor: 'transparent',
        };
        break;
      default:
        buttonStyle = {
          ...buttonStyle,
          backgroundColor: colors.primary,
        };
    }

    // Disabled state
    if (disabled) {
      buttonStyle = {
        ...buttonStyle,
        opacity: 0.5,
      };
    }

    return buttonStyle;
  };

  const getTextStyles = (): TextStyle => {
    let textStyles: TextStyle = {
      ...styles.text,
      color: colors.text,
    };

    // Size styles
    switch (size) {
      case 'small':
        textStyles = { ...textStyles, ...styles.smallText };
        break;
      case 'large':
        textStyles = { ...textStyles, ...styles.largeText };
        break;
      default:
        textStyles = { ...textStyles, ...styles.mediumText };
    }

    // Variant styles
    switch (variant) {
      case 'primary':
        textStyles = {
          ...textStyles,
          color: '#FFFFFF',
        };
        break;
      case 'secondary':
        textStyles = {
          ...textStyles,
          color: isDark ? '#121212' : '#FFFFFF',
        };
        break;
      case 'outline':
        textStyles = {
          ...textStyles,
          color: colors.primary,
        };
        break;
      case 'ghost':
        textStyles = {
          ...textStyles,
          color: colors.primary,
        };
        break;
    }

    return textStyles;
  };

  return (
    <TouchableOpacity
      style={[getButtonStyles(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? '#FFFFFF' : colors.primary}
          size="small"
        />
      ) : (
        <Text style={[getTextStyles(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mediumButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 16,
  },
});