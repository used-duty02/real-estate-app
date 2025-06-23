import React from 'react';
import { Text, StyleSheet, TextStyle, TextProps } from 'react-native';
import { useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';

interface TypographyProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: string;
  style?: TextStyle;
  children: React.ReactNode;
}

export default function Typography({
  variant = 'body',
  weight = 'regular',
  color,
  style,
  children,
  ...props
}: TypographyProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const getFontFamily = () => {
    switch (weight) {
      case 'medium':
        return 'Montserrat-Medium';
      case 'semibold':
        return 'Montserrat-SemiBold';
      case 'bold':
        return 'Montserrat-Bold';
      default:
        return 'Montserrat-Regular';
    }
  };

  const getTextStyles = (): TextStyle => {
    let textStyle: TextStyle = {
      color: color || colors.text,
      fontFamily: getFontFamily(),
    };

    switch (variant) {
      case 'h1':
        textStyle = { ...textStyle, ...styles.h1 };
        break;
      case 'h2':
        textStyle = { ...textStyle, ...styles.h2 };
        break;
      case 'h3':
        textStyle = { ...textStyle, ...styles.h3 };
        break;
      case 'h4':
        textStyle = { ...textStyle, ...styles.h4 };
        break;
      case 'h5':
        textStyle = { ...textStyle, ...styles.h5 };
        break;
      case 'h6':
        textStyle = { ...textStyle, ...styles.h6 };
        break;
      case 'caption':
        textStyle = { ...textStyle, ...styles.caption };
        break;
      case 'label':
        textStyle = { ...textStyle, ...styles.label };
        break;
      default:
        textStyle = { ...textStyle, ...styles.body };
    }

    return textStyle;
  };

  return (
    <Text style={[getTextStyles(), style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.25,
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
  },
  h4: {
    fontSize: 20,
    lineHeight: 28,
  },
  h5: {
    fontSize: 18,
    lineHeight: 26,
  },
  h6: {
    fontSize: 16,
    lineHeight: 24,
  },
  body: {
    fontSize: 14,
    lineHeight: 22,
  },
  caption: {
    fontSize: 12,
    lineHeight: 18,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
});