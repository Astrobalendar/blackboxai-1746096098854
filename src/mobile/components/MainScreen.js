import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainScreen = ({ tracking, onStart, onStop, metrics }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Tracker</Text>
      <View style={styles.metricsContainer}>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Distance</Text>
          <Text style={styles.metricValue}>{metrics.distance ?? '0.00'} km</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Pace</Text>
          <Text style={styles.metricValue}>{metrics.pace ?? '0:00'} min/km</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Cadence</Text>
          <Text style={styles.metricValue}>{metrics.cadence ?? '0'} spm</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {!tracking ? (
          <Button title="Start Tracking" onPress={onStart} />
        ) : (
          <Button title="Stop Tracking" onPress={onStop} color="#e63946" />
        )}
      </View>
      <View style={styles.aiGuidance}>
        <Text style={styles.aiText}>AI Training Guidance: Stay steady, pace yourself!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f1faee',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#1d3557',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 48,
  },
  metricBox: {
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 16,
    color: '#457b9d',
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1d3557',
  },
  buttonContainer: {
    marginBottom: 48,
    alignItems: 'center',
  },
  aiGuidance: {
    padding: 16,
    backgroundColor: '#a8dadc',
    borderRadius: 8,
  },
  aiText: {
    fontSize: 18,
    color: '#1d3557',
    textAlign: 'center',
  },
});

export default MainScreen;
