import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const nationalStandards = {
  '100m': { male: 12.0, female: 14.0 }, // seconds
  '400m': { male: 55.0, female: 65.0 }, // seconds
  '1500m': { male: 300.0, female: 360.0 }, // seconds
  // Add more events and standards as needed
};

const AthleteEvaluationTest = ({ onComplete }) => {
  const [results, setResults] = useState({
    '100m': '',
    '400m': '',
    '1500m': '',
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (event, value) => {
    setResults(prev => ({ ...prev, [event]: value }));
  };

  const evaluatePerformance = () => {
    let messages = [];
    for (const event in results) {
      const time = parseFloat(results[event]);
      if (isNaN(time)) {
        messages.push(`${event}: Please enter a valid time.`);
        continue;
      }
      const standard = nationalStandards[event].male; // For simplicity, assuming male
      if (time <= standard) {
        messages.push(`${event}: Excellent performance!`);
      } else {
        messages.push(`${event}: Needs improvement.`);
      }
    }
    setFeedback(messages);
    if (onComplete) {
      onComplete(results);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Athlete Evaluation Test</Text>
      {Object.keys(nationalStandards).map(event => (
        <View key={event} style={styles.inputGroup}>
          <Text style={styles.label}>{event} Time (seconds):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={results[event]}
            onChangeText={value => handleChange(event, value)}
            placeholder={`Enter your ${event} time`}
          />
          <Text style={styles.standard}>
            National Standard: {nationalStandards[event].male} seconds (male)
          </Text>
        </View>
      ))}
      <Button title="Evaluate" onPress={evaluatePerformance} />
      {feedback && (
        <View style={styles.feedbackContainer}>
          {feedback.map((msg, idx) => (
            <Text key={idx} style={styles.feedbackText}>{msg}</Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f1faee',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1d3557',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#457b9d',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#a8dadc',
    borderRadius: 6,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  standard: {
    marginTop: 4,
    fontSize: 14,
    color: '#1d3557',
  },
  feedbackContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#a8dadc',
    borderRadius: 8,
  },
  feedbackText: {
    fontSize: 16,
    color: '#1d3557',
    marginBottom: 8,
  },
});

export default AthleteEvaluationTest;
