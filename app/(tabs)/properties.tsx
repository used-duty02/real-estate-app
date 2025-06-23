import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  useColorScheme,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SlidersHorizontal } from 'lucide-react-native';
import Typography from '../../components/ui/Typography';
import SearchBar from '../../components/SearchBar';
import PropertyCard from '../../components/PropertyCard';
import Colors from '../../constants/Colors';
import { properties } from '../../data/properties';
import FilterModal from '../../components/FilterModal';

export default function PropertiesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [filter, setFilter] = useState({});

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search functionality
  };

  const handleFilter = () => {
    setFilterModalVisible(true);
  };

  const handleApplyFilter = (newFilter: any) => {
    setFilter(newFilter);
    setFilterModalVisible(false);
    // Apply filter logic here
  };

  const filteredProperties = properties;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <View style={styles.header}>
        <Typography variant="h4" weight="semibold">
          All Properties
        </Typography>
        <TouchableOpacity
          style={[styles.iconButton, { backgroundColor: colors.card }]}
          onPress={handleFilter}
        >
          <SlidersHorizontal size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      </View>

      <View style={styles.sortInfo}>
        <Typography
          variant="body"
          style={{ color: isDark ? '#AAAAAA' : '#666666' }}
        >
          {filteredProperties.length} properties
        </Typography>
      </View>

      <FlatList
        data={filteredProperties}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <PropertyCard property={item} />
          </View>
        )}
      />

      <FilterModal
        visible={isFilterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onApply={handleApplyFilter}
        initialFilter={filter}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 48 : 8,
    paddingBottom: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    marginBottom: 16,
  },
  sortInfo: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  listContent: {
    padding: 8,
  },
  listItem: {
    width: '100%',
    padding: 8,
  },
});
