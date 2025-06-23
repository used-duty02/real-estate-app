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
import { Heart, SlidersHorizontal } from 'lucide-react-native';
import Typography from '../../components/ui/Typography';
import PropertyCard from '../../components/PropertyCard';
import Button from '../../components/ui/Button';
import Colors from '../../constants/Colors';
import { favoriteProperties } from '../../data/properties';
import FilterModal from '../../components/FilterModal';

export default function FavoritesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [filter, setFilter] = useState({});

  const handleApplyFilter = (newFilter: any) => {
    setFilter(newFilter);
    setFilterModalVisible(false);
    // Apply filter logic here
  };

  const filteredFavorites = favoriteProperties; // Apply filter logic here

  const EmptyState = () => (
    <View style={styles.emptyContainer}>
      <View
        style={[
          styles.emptyIconContainer,
          { backgroundColor: isDark ? '#333333' : '#F5F5F5' },
        ]}
      >
        <Heart size={48} color={colors.primary} />
      </View>
      <Typography variant="h4" weight="semibold" style={styles.emptyTitle}>
        No Favorites Yet
      </Typography>
      <Typography
        variant="body"
        style={[styles.emptyText, { color: isDark ? '#AAAAAA' : '#666666' }]}
      >
        Start saving your favorite properties by tapping the heart icon on any
        property.
      </Typography>
      <Button
        title="Browse Properties"
        onPress={() => {}}
        variant="primary"
        style={styles.browseButton}
      />
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <View style={styles.header}>
        <Typography variant="h4" weight="semibold">
          Favorites
        </Typography>
        <TouchableOpacity
          style={[styles.iconButton, { backgroundColor: colors.card }]}
          onPress={() => setFilterModalVisible(true)}
        >
          <SlidersHorizontal size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      {filteredFavorites.length > 0 ? (
        <FlatList
          data={filteredFavorites}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <PropertyCard property={item} />
            </View>
          )}
        />
      ) : (
        <EmptyState />
      )}

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
  listContent: {
    padding: 16,
  },
  listItem: {
    marginBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  emptyTitle: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 16,
    color: '#666666',
  },
  browseButton: {
    width: '80%',
  },
});
