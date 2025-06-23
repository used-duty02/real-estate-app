import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  Platform,
} from 'react-native';
import { Search, FileSliders as Sliders } from 'lucide-react-native';
import Colors from '../constants/Colors';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: () => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  onFilter,
  placeholder = 'Search properties, locations...',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.searchContainer,
          {
            backgroundColor: isDark ? colors.card : '#F5F5F5',
            borderColor: colors.border,
          },
        ]}
      >
        <Search
          size={20}
          color={isDark ? '#888888' : '#666666'}
          style={styles.searchIcon}
        />
        <TextInput
          style={[
            styles.input,
            {
              color: colors.text,
              fontFamily: 'Montserrat-Regular',
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={isDark ? '#888888' : '#999999'}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        {/* <TouchableOpacity
          style={[
            styles.filterButton,
            { backgroundColor: colors.primary },
          ]}
          onPress={onFilter}
        >
          <Sliders size={18} color="#FFFFFF" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 50,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
      web: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    height: '100%',
  },
  filterButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
