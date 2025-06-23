import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react-native';
import Typography from './ui/Typography';
import Card from './ui/Card';
import Colors from '../constants/Colors';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  isFeatured?: boolean;
}

const { width } = Dimensions.get('window');
const cardWidth = width * 0.85;
const featuredCardWidth = width * 0.85;

export default function PropertyCard({ property, isFeatured = false }: PropertyCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const handlePress = () => {
    router.push(`/property/${property.id}`);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handlePress}
      style={[
        styles.container,
        isFeatured ? styles.featuredContainer : null,
      ]}
    >
      <Card
        variant="elevated"
        style={[
          styles.card,
          isFeatured ? styles.featuredCard : null,
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: property.images[0] }} style={styles.image} />
          <View style={styles.tagContainer}>
            <View
              style={[
                styles.tag,
                {
                  backgroundColor:
                    property.type === 'For Sale'
                      ? colors.primary
                      : colors.secondary,
                },
              ]}
            >
              <Typography
                variant="caption"
                weight="semibold"
                color="#FFFFFF"
              >
                {property.type}
              </Typography>
            </View>
          </View>
          <TouchableOpacity style={styles.favoriteButton}>
            <Heart
              size={20}
              color="#FFFFFF"
              fill={property.isFavorite ? '#E0B973' : 'transparent'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <Typography variant="h5" weight="semibold">
            {formatPrice(property.price)}
          </Typography>
          <Typography
            variant="h6"
            weight="medium"
            style={styles.title}
            numberOfLines={1}
          >
            {property.title}
          </Typography>
          <View style={styles.locationContainer}>
            <MapPin size={14} color={colors.text} />
            <Typography
              variant="caption"
              style={styles.locationText}
              numberOfLines={1}
            >
              {property.location}
            </Typography>
          </View>

          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <Bed size={16} color={colors.text} />
              <Typography variant="caption" style={styles.featureText}>
                {property.bedrooms} Beds
              </Typography>
            </View>
            <View style={styles.featureItem}>
              <Bath size={16} color={colors.text} />
              <Typography variant="caption" style={styles.featureText}>
                {property.bathrooms} Baths
              </Typography>
            </View>
            <View style={styles.featureItem}>
              <Square size={16} color={colors.text} />
              <Typography variant="caption" style={styles.featureText}>
                {property.size} sqft
              </Typography>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    marginHorizontal: 8,
  },
  featuredContainer: {
    width: featuredCardWidth,
  },
  card: {
    padding: 0,
    overflow: 'hidden',
  },
  featuredCard: {},
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  tagContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginRight: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    marginTop: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  locationText: {
    marginLeft: 4,
    flex: 1,
  },
  featuresContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    marginLeft: 4,
  },
});