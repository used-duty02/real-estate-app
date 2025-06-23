import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Typography from './ui/Typography';
import Colors from '../constants/Colors';

interface CategoryPillProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

export default function CategoryPill({
  title,
  isActive,
  onPress,
}: CategoryPillProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  return (
    <TouchableOpacity
      style={[
        styles.pill,
        {
          backgroundColor: isActive
            ? colors.primary
            : isDark
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.05)',
        },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Typography
        variant="caption"
        weight={isActive ? 'semibold' : 'medium'}
        color={isActive ? '#FFFFFF' : colors.text}
      >
        {title}
      </Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
});