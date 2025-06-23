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
import { X, Calendar, Clock } from 'lucide-react-native';
import Typography from './ui/Typography';
import Button from './ui/Button';
import Colors from '../constants/Colors';

interface ScheduleVisitModalProps {
  visible: boolean;
  onClose: () => void;
  onSchedule: (date: string, time: string) => void;
  propertyTitle: string;
}

export default function ScheduleVisitModal({
  visible,
  onClose,
  onSchedule,
  propertyTitle,
}: ScheduleVisitModalProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate next 7 days for date selection
  const getDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      
      dates.push(formattedDate);
    }
    
    return dates;
  };

  // Time slots
  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      onSchedule(selectedDate, selectedTime);
      onClose();
    }
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
              Schedule a Visit
            </Typography>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.propertyInfo}>
              <Typography variant="body" weight="medium">
                Property:
              </Typography>
              <Typography variant="body" style={styles.propertyTitle}>
                {propertyTitle}
              </Typography>
            </View>

            {/* Date Selection */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Calendar size={20} color={colors.primary} />
                <Typography variant="h6" weight="semibold" style={styles.sectionTitle}>
                  Select Date
                </Typography>
              </View>
              
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.datesContainer}
              >
                {getDates().map((date, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.dateButton,
                      {
                        backgroundColor:
                          selectedDate === date
                            ? colors.primary
                            : isDark
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.05)',
                      },
                    ]}
                    onPress={() => setSelectedDate(date)}
                  >
                    <Typography
                      variant="body"
                      weight="medium"
                      color={selectedDate === date ? '#FFFFFF' : colors.text}
                    >
                      {date}
                    </Typography>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Time Selection */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Clock size={20} color={colors.primary} />
                <Typography variant="h6" weight="semibold" style={styles.sectionTitle}>
                  Select Time
                </Typography>
              </View>
              
              <View style={styles.timeSlotsContainer}>
                {timeSlots.map((time, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.timeButton,
                      {
                        backgroundColor:
                          selectedTime === time
                            ? colors.primary
                            : isDark
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.05)',
                      },
                    ]}
                    onPress={() => setSelectedTime(time)}
                  >
                    <Typography
                      variant="body"
                      weight="medium"
                      color={selectedTime === time ? '#FFFFFF' : colors.text}
                    >
                      {time}
                    </Typography>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Notes */}
            <View style={styles.section}>
              <Typography variant="body" style={styles.note}>
                Our agent will contact you to confirm your visit. Please be available 15 minutes before your scheduled time.
              </Typography>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Button
              title="Cancel"
              onPress={onClose}
              variant="outline"
              style={styles.cancelButton}
            />
            <Button
              title="Schedule Visit"
              onPress={handleSchedule}
              variant="primary"
              style={styles.scheduleButton}
              disabled={!selectedDate || !selectedTime}
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
  propertyInfo: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  propertyTitle: {
    marginTop: 4,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    marginLeft: 8,
  },
  datesContainer: {
    paddingBottom: 8,
  },
  dateButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeButton: {
    width: '30%',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: '5%',
    marginBottom: 12,
    alignItems: 'center',
  },
  note: {
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
  },
  scheduleButton: {
    flex: 2,
    marginLeft: 8,
  },
});