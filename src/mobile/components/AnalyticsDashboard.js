import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AnalyticsDashboard = ({ stats }) => {
  if (!stats) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Analytics Dashboard</Text>
      <View style={styles.statBox}>
        <Text style={styles.statLabel}>Total Distance</Text>
        <Text style={styles.statValue}>{stats.totalDistance ?? '0'} km</Text>
      </View>
      <View style={styles.statBox}>
        <Text style={styles.statLabel}>Total Runs</Text>
        <Text style={styles.statValue}>{stats.totalRuns ?? '0'}</Text>
      </View>
      <View style={styles.statBox}>
        <Text style={styles.statLabel}>Average Pace</Text>
        <Text style={styles.statValue}>{stats.averagePace ?? '0:00'} min/km</Text>
      </View>
      <View style={styles.statBox}>
        <Text style={styles.statLabel}>Best 5K Time</Text>
        <Text style={styles.statValue}>{stats.best5kTime ?? 'N/A'}</Text>
      </View>
      {/* Add more stats as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#e3f2fd',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#0d47a1',
    textAlign: 'center',
  },
  statBox: {
    backgroundColor: '#bbdefb',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  statLabel: {
    fontSize: 16,
    color: '#0d47a1',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0d47a1',
  },
});

export default AnalyticsDashboard;
