import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  Platform,
} from 'react-native';
import { X, Check } from 'lucide-react-native';
import Typography from './ui/Typography';
import Button from './ui/Button';
import Colors from '../constants/Colors';
import { PropertyFilter } from '../types/property';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filter: PropertyFilter) => void;
  initialFilter?: PropertyFilter;
}

export default function FilterModal({
  visible,
  onClose,
  onApply,
  initialFilter = {},
}: FilterModalProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const [filter, setFilter] = useState<PropertyFilter>(initialFilter);

  const propertyTypes = ['For Sale', 'For Rent'];
  const propertyCategories = ['Residential', 'Commercial', 'Luxury', 'Land'];
  const bedroomOptions = [1, 2, 3, 4, 5, 'Any'];
  const bathroomOptions = [1, 2, 3, 4, 5, 'Any'];
  const priceRanges = [
    { label: 'Any', min: undefined, max: undefined },
    { label: 'Under $500K', min: 0, max: 500000 },
    { label: '$500K - $1M', min: 500000, max: 1000000 },
    { label: '$1M - $2M', min: 1000000, max: 2000000 },
    { label: '$2M - $5M', min: 2000000, max: 5000000 },
    { label: '$5M+', min: 5000000, max: undefined },
  ];

  const handleTypeSelect = (type: 'For Sale' | 'For Rent') => {
    setFilter({ ...filter, type });
  };

  const handleCategorySelect = (category: 'Residential' | 'Commercial' | 'Luxury' | 'Land') => {
    setFilter({ ...filter, category });
  };

  const handleBedroomSelect = (bedrooms: number | 'Any') => {
    setFilter({
      ...filter,
      bedrooms: bedrooms === 'Any' ? undefined : bedrooms,
    });
  };

  const handleBathroomSelect = (bathrooms: number | 'Any') => {
    setFilter({
      ...filter,
      bathrooms: bathrooms === 'Any' ? undefined : bathrooms,
    });
  };

  const handlePriceRangeSelect = (min?: number, max?: number) => {
    setFilter({
      ...filter,
      minPrice: min,
      maxPrice: max,
    });
  };

  const handleReset = () => {
    setFilter({});
  };

  const handleApply = () => {
    onApply(filter);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View
        style={[
          styles.modalContainer,
          { backgroundColor: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.3)' },
        ]}
      >
        <View
          style={[
            styles.modalContent,
            { backgroundColor: colors.background },
          ]}
        >
          <View style={styles.header}>
            <Typography variant="h5" weight="semibold">
              Filter Properties
            </Typography>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Property Type */}
            <View style={styles.section}>
              <Typography variant="h6" weight="semibold" style={styles.sectionTitle}>
                Property Type
              </Typography>
              <View style={styles.optionsContainer}>
                {propertyTypes.map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={[
                      styles.optionButton,
                      {
                        backgroundColor:
                          filter.type === type
                            ? colors.primary
                            : isDark
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.05)',
                      },
                    ]}
                    onPress={() => handleTypeSelect(type as 'For Sale' | 'For Rent')}
                  >
                    <Typography
                      variant="body"
                      weight="medium"
                      color={filter.type === type ? '#FFFFFF' : colors.text}
                    >
                      {type}
                    </Typography>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Property Category */}
            <View style={styles.section}>
              <Typography variant="h6" weight="semibold" style={styles.sectionTitle}>
                Category
              </Typography>
              <View style={styles.optionsContainer}>
                {propertyCategories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.optionButton,
                      {
                        backgroundColor:
                          filter.category === category
                            ? colors.primary
                            : isDark
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.05)',
                      },
                    ]}
                    onPress={() => handleCategorySelect(category as 'Residential' | 'Commercial' | 'Luxury' | 'Land')}
                  >
                    <Typography
                      variant="body"
                      weight="medium"
                      color={filter.category === category ? '#FFFFFF' : colors.text}
                    >
                      {category}
                    </Typography>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Price Range */}
            <View style={styles.section}>
              <Typography variant="h6" weight="semibold" style={styles.sectionTitle}>
                Price Range
              </Typography>
              <View style={styles.optionsContainer}>
                {priceRanges.map((range, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.optionButton,
                      {
                        backgroundColor:
                          filter.minPrice === range.min && filter.maxPrice === range.max
                            ? colors.primary
                            : isDark
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.05)',
                      },
                    ]}
                    onPress={() => handlePriceRangeSelect(range.min, range.max)}
                  >
                    <Typography
                      variant="body"
                      weight="medium"
                      color={
                        filter.minPrice === range.min && filter.maxPrice === range.max
                          ? '#FFFFFF'
                          : colors.text
                      }
                    >
                      {range.label}
                    </Typography>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Bedrooms */}
            <View style={styles.section}>
              <Typography variant="h6" weight="semibold" style={styles.sectionTitle}>
                Bedrooms
              </Typography>
              <View style={styles.optionsContainer}>
                {bedroomOptions.map((option) => (
                  <TouchableOpacity
                    key={option.toString()}
                    style={[
                      styles.optionButton,
                      {
                        backgroundColor:
                          (filter.bedrooms === option) ||
                          (option === 'Any' && filter.bedrooms === undefined)
                            ? colors.primary
                            : isDark
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.05)',
                      },
                    ]}
                    onPress={() => handleBedroomSelect(option as number | 'Any')}
                  >
                    <Typography
                      variant="body"
                      weight="medium"
                      color={
                        (filter.bedrooms === option) ||
                        (option === 'Any' && filter.bedrooms === undefined)
                          ? '#FFFFFF'
                          : colors.text
                      }
                    >
                      {option}
                    </Typography>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Bathrooms */}
            <View style={styles.section}>
              <Typography variant="h6" weight="semibold" style={styles.sectionTitle}>
                Bathrooms
              </Typography>
              <View style={styles.optionsContainer}>
                {bathroomOptions.map((option) => (
                  <TouchableOpacity
                    key={option.toString()}
                    style={[
                      styles.optionButton,
                      {
                        backgroundColor:
                          (filter.bathrooms === option) ||
                          (option === 'Any' && filter.bathrooms === undefined)
                            ? colors.primary
                            : isDark
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.05)',
                      },
                    ]}
                    onPress={() => handleBathroomSelect(option as number | 'Any')}
                  >
                    <Typography
                      variant="body"
                      weight="medium"
                      color={
                        (filter.bathrooms === option) ||
                        (option === 'Any' && filter.bathrooms === undefined)
                          ? '#FFFFFF'
                          : colors.text
                      }
                    >
                      {option}
                    </Typography>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Button
              title="Reset"
              onPress={handleReset}
              variant="outline"
              style={styles.resetButton}
            />
            <Button
              title="Apply Filters"
              onPress={handleApply}
              variant="primary"
              style={styles.applyButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    height: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    marginBottom: 12,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  resetButton: {
    flex: 1,
    marginRight: 8,
  },
  applyButton: {
    flex: 2,
    marginLeft: 8,
  },
});