import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalizedFeedback = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalized Feedback</Text>
      {feedback.map((msg, idx) => (
        <Text key={idx} style={styles.message}>{msg}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#00796b',
  },
  message: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 8,
  },
});

export default PersonalizedFeedback;
