import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  useColorScheme,
} from 'react-native';
import PropertyCard from './PropertyCard';
import Typography from './ui/Typography';
import { Property } from '../types/property';
import Colors from '../constants/Colors';

interface FeaturedCarouselProps {
  title: string;
  properties: Property[];
}

const { width } = Dimensions.get('window');

export default function FeaturedCarousel({
  title,
  properties,
}: FeaturedCarouselProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h4" weight="semibold">
          {title}
        </Typography>
      </View>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        snapToInterval={width * 0.85 + 16}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <PropertyCard property={item} isFeatured={true} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  listContent: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});