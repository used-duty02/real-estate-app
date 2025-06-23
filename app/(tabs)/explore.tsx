import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
  Platform,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { List, MapPin } from 'lucide-react-native';
import Typography from '../../components/ui/Typography';
import SearchBar from '../../components/SearchBar';
import Colors from '../../constants/Colors';
import { properties } from '../../data/properties';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// Mock initial region (Miami)
const INITIAL_REGION = {
  latitude: 25.7617,
  longitude: -80.1918,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

// Mock property locations
const propertyLocations = properties.map((property) => ({
  id: property.id,
  title: property.title,
  price: property.price,
  type: property.type,
  coordinate: {
    // Generate random coordinates near the initial region for demo purposes
    latitude: INITIAL_REGION.latitude + (Math.random() - 0.5) * 0.1,
    longitude: INITIAL_REGION.longitude + (Math.random() - 0.5) * 0.1,
  },
}));

const locationMarker = require('../../assets/images/location-marker.png');

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search functionality
  };

  const handleFilter = () => {
    console.log('Open filter modal');
    // Implement filter modal
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'map' ? 'list' : 'map');
  };

  const formatPrice = (price: number, type: string) => {
    if (type === 'For Rent') {
      return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <View style={styles.header}>
        <Typography variant="h4" weight="semibold">
          Explore Properties
        </Typography>
        <TouchableOpacity
          style={[styles.viewToggle, { backgroundColor: colors.card }]}
          onPress={toggleViewMode}
        >
          {viewMode === 'map' ? (
            <List size={20} color={colors.text} />
          ) : (
            <MapPin size={20} color={colors.text} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      </View>

      {viewMode === 'map' ? (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={INITIAL_REGION}
            showsUserLocation
            showsMyLocationButton
          >
            {propertyLocations.map((property) => (
              <Marker
                key={property.id}
                coordinate={property.coordinate}
                title={property.title}
                description={formatPrice(property.price, property.type)}
                anchor={{ x: 0.5, y: 1 }}
              >
                <Image
                  source={locationMarker}
                  style={styles.markerImage}
                  resizeMode="contain"
                />
              </Marker>
            ))}
          </MapView>
        </View>
      ) : (
        <View style={styles.listContainer}>
          <Typography variant="body">
            List view will be implemented here
          </Typography>
        </View>
      )}
    </View>
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
    paddingTop: Platform.OS === 'android' ? 48 : 60,
    paddingBottom: 16,
  },
  viewToggle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    marginBottom: 16,
  },
  mapContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerImage: {
    width: 30,
    height: 40,
  },
});
