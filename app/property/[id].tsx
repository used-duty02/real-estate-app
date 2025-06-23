import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  useColorScheme,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { ArrowLeft } from 'lucide-react-native'; // Import back arrow icon
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button';
import Colors from '../../constants/Colors';
import ScheduleVisitModal from '../../components/ScheduleVisitModal';
import { properties } from '../../data/properties';
import { useLocalSearchParams } from 'expo-router';

export default function PropertyPage() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const navigation = useNavigation(); // Get navigation object
  const { id } = useLocalSearchParams();
  const property = properties.find((p) => p.id === parseInt(id as string));

  const [isScheduleModalVisible, setScheduleModalVisible] = useState(false);

  if (!property) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Typography variant="h5">Property not found</Typography>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style={isDark ? 'light' : 'dark'} />

      {/* Header with Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
        <Typography variant="h4" weight="semibold" style={styles.headerTitle}>
          Property Details
        </Typography>
      </View>

      <Image
        source={{ uri: property.images[0] }}
        style={styles.propertyImage}
      />

      <View style={styles.content}>
        <Typography variant="h4" weight="semibold" style={styles.title}>
          {property.title}
        </Typography>
        <Typography variant="body" style={styles.location}>
          {property.location}
        </Typography>

        <View style={styles.details}>
          <Typography variant="body" weight="medium">
            {property.bedrooms} Bedrooms • {property.bathrooms} Bathrooms •{' '}
            {property.size} sqft
          </Typography>
        </View>

        <Typography variant="body" style={styles.description}>
          {property.description}
        </Typography>

        <View style={styles.amenitiesSection}>
          <Typography variant="h6" weight="semibold">
            Amenities
          </Typography>
          <View style={styles.amenitiesList}>
            {property.amenities.map((amenity, index) => (
              <View key={index} style={styles.amenityItem}>
                <Typography variant="body">{amenity}</Typography>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.agentSection}>
          <Typography variant="h6" weight="semibold">
            Contact Agent
          </Typography>
          <View style={styles.agentInfo}>
            <Image
              source={{ uri: property.agent.photo }}
              style={styles.agentImage}
            />
            <View style={styles.agentDetails}>
              <Typography variant="body" weight="medium">
                {property.agent.name}
              </Typography>
              <Typography variant="body">{property.agent.phone}</Typography>
              <Typography variant="body">{property.agent.email}</Typography>
            </View>
          </View>
        </View>

        <Button
          title="Schedule a Visit"
          onPress={() => setScheduleModalVisible(true)}
          variant="primary"
          style={styles.scheduleButton}
        />
      </View>

      <ScheduleVisitModal
        visible={isScheduleModalVisible}
        onClose={() => setScheduleModalVisible(false)}
        onSchedule={(date, time) => {
          console.log('Scheduled visit for:', date, time);
          setScheduleModalVisible(false);
        }}
        propertyTitle={property.title}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 48 : 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    flex: 1,
  },
  propertyImage: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  title: {
    marginBottom: 8,
  },
  location: {
    marginBottom: 16,
    color: '#666666',
  },
  details: {
    marginBottom: 16,
  },
  description: {
    marginBottom: 24,
  },
  amenitiesSection: {
    marginBottom: 24,
  },
  amenitiesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  amenityItem: {
    width: '50%',
    marginBottom: 8,
  },
  agentSection: {
    marginBottom: 24,
  },
  agentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  agentImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  agentDetails: {
    flex: 1,
  },
  scheduleButton: {
    marginTop: 16,
  },
});
