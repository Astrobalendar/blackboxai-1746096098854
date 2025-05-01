import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrainingSchedule = ({ schedule }) => {
  if (!schedule || schedule.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Training Schedule</Text>
      {schedule.map((item, idx) => (
        <View key={idx} style={styles.item}>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={styles.activity}>{item.activity}</Text>
          <Text style={styles.details}>{item.details}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff3e0',
    borderRadius: 8,
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#ef6c00',
  },
  item: {
    marginBottom: 12,
  },
  day: {
    fontSize: 16,
    fontWeight: '600',
    color: '#bf360c',
  },
  activity: {
    fontSize: 16,
    color: '#e65100',
  },
  details: {
    fontSize: 14,
    color: '#f57c00',
  },
});

export default TrainingSchedule;
