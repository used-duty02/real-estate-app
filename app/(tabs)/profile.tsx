import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useColorScheme,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Settings, Bell, Heart, Clock, Calendar, CircleHelp as HelpCircle, LogOut, ChevronRight } from 'lucide-react-native';
import Typography from '../../components/ui/Typography';
import Card from '../../components/ui/Card';
import Colors from '../../constants/Colors';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const menuItems = [
    {
      icon: <Heart size={24} color={colors.primary} />,
      title: 'Saved Properties',
      subtitle: '3 properties',
      onPress: () => console.log('Saved Properties'),
    },
    {
      icon: <Clock size={24} color={colors.primary} />,
      title: 'Recently Viewed',
      subtitle: '12 properties',
      onPress: () => console.log('Recently Viewed'),
    },
    {
      icon: <Calendar size={24} color={colors.primary} />,
      title: 'Scheduled Visits',
      subtitle: '1 upcoming',
      onPress: () => console.log('Scheduled Visits'),
    },
    {
      icon: <Bell size={24} color={colors.primary} />,
      title: 'Notifications',
      subtitle: 'Manage alerts',
      onPress: () => console.log('Notifications'),
    },
    {
      icon: <HelpCircle size={24} color={colors.primary} />,
      title: 'Help & Support',
      subtitle: 'Contact us',
      onPress: () => console.log('Help & Support'),
    },
    {
      icon: <Settings size={24} color={colors.primary} />,
      title: 'Settings',
      subtitle: 'Privacy, security',
      onPress: () => console.log('Settings'),
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Typography variant="h4" weight="semibold">
            Profile
          </Typography>
          <TouchableOpacity
            style={[styles.settingsButton, { backgroundColor: colors.card }]}
          >
            <Settings size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Typography variant="h4" weight="semibold">
              John Doe
            </Typography>
            <Typography
              variant="body"
              style={{ color: isDark ? '#AAAAAA' : '#666666' }}
            >
              john.doe@example.com
            </Typography>
          </View>
        </View>

        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={item.onPress}
              activeOpacity={0.7}
            >
              <Card
                variant="filled"
                style={[
                  styles.menuItem,
                  index === menuItems.length - 1 ? styles.lastMenuItem : null,
                ]}
              >
                <View style={styles.menuItemContent}>
                  <View style={styles.menuItemIcon}>{item.icon}</View>
                  <View style={styles.menuItemText}>
                    <Typography variant="h6" weight="medium">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{ color: isDark ? '#AAAAAA' : '#666666' }}
                    >
                      {item.subtitle}
                    </Typography>
                  </View>
                  <ChevronRight size={20} color={colors.text} />
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.logoutButton,
            { borderColor: isDark ? '#333333' : '#E2E8F0' },
          ]}
        >
          <LogOut size={20} color={isDark ? '#FF6B81' : '#FF4757'} />
          <Typography
            variant="body"
            weight="medium"
            style={[styles.logoutText, { color: isDark ? '#FF6B81' : '#FF4757' }]}
          >
            Log Out
          </Typography>
        </TouchableOpacity>
      </ScrollView>
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
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 16,
  },
  menuSection: {
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  menuItem: {
    marginVertical: 4,
  },
  lastMenuItem: {
    marginBottom: 16,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemIcon: {
    marginRight: 16,
  },
  menuItemText: {
    flex: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderRadius: 12,
  },
  logoutText: {
    marginLeft: 8,
  },
});