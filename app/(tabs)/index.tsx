import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  useColorScheme,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Bell } from 'lucide-react-native';
import Typography from '../../components/ui/Typography';
import SearchBar from '../../components/SearchBar';
import CategoryPill from '../../components/CategoryPill';
import FeaturedCarousel from '../../components/FeaturedCarousel';
import Colors from '../../constants/Colors';
import {
  featuredProperties,
  forSaleProperties,
  forRentProperties,
  luxuryProperties,
} from '../../data/properties';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'For Sale',
    'For Rent',
    'Luxury',
    'Commercial',
    'New',
  ];

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search functionality
  };

  const handleFilter = () => {
    console.log('Open filter modal');
    // Implement filter modal
  };

  const handleCategoryPress = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Typography variant="h3" weight="bold">
            Luxury Real Estate
          </Typography>
          <TouchableOpacity
            style={[styles.iconButton, { backgroundColor: colors.card }]}
          >
            <Bell size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.subtitleContainer}>
          <Typography
            variant="body"
            style={{ color: isDark ? '#AAAAAA' : '#666666' }}
          >
            Find your dream property
          </Typography>
        </View>

        <View style={styles.searchContainer}>
          <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
        </View>

        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScrollContent}
          >
            {categories.map((category) => (
              <CategoryPill
                key={category}
                title={category}
                isActive={activeCategory === category}
                onPress={() => handleCategoryPress(category)}
              />
            ))}
          </ScrollView>
        </View>

        <FeaturedCarousel
          title="Featured Properties"
          properties={featuredProperties}
        />

        <FeaturedCarousel title="For Sale" properties={forSaleProperties} />

        <FeaturedCarousel title="For Rent" properties={forRentProperties} />

        <FeaturedCarousel
          title="Luxury Collection"
          properties={luxuryProperties}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 48 : 8,
    paddingBottom: 4,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitleContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  categoriesContainer: {
    marginBottom: 8,
  },
  categoriesScrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
