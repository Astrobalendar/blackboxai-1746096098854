import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MainScreen from './components/MainScreen';
import AthleteEvaluationTest from './components/AthleteEvaluationTest';
import AuthScreen from './components/AuthScreen';
import PersonalizedFeedback from './components/PersonalizedFeedback';
import TrainingSchedule from './components/TrainingSchedule';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [metrics, setMetrics] = useState({
    distance: 0,
    pace: '0:00',
    cadence: 0,
  });
  const [feedback, setFeedback] = useState([]);
  const [schedule, setSchedule] = useState([]);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    setShowEvaluation(true);
  };

  const handleEvaluationComplete = (results) => {
    setShowEvaluation(false);
    // TODO: Process evaluation results and unlock features accordingly
    // For demo, set sample feedback and schedule
    setFeedback([
      'Great job on your 100m sprint!',
      'Focus on improving your 400m endurance.',
      'Keep up the consistent training!',
    ]);
    setSchedule([
      { day: 'Monday', activity: 'Interval Training', details: '4x400m at target pace' },
      { day: 'Wednesday', activity: 'Strength Training', details: 'Core and leg exercises' },
      { day: 'Friday', activity: 'Running Drills', details: 'Stride and cadence drills' },
    ]);
  };

  const onStart = () => {
    setTracking(true);
    // TODO: Start sensor tracking and update metrics
  };

  const onStop = () => {
    setTracking(false);
    setMetrics({
      distance: 0,
      pace: '0:00',
      cadence: 0,
    });
    // TODO: Stop sensor tracking
  };

  if (!loggedIn) {
    return <AuthScreen onLoginSuccess={handleLoginSuccess} />;
  }

  if (showEvaluation) {
    return <AthleteEvaluationTest onComplete={handleEvaluationComplete} />;
  }

  return (
    <ScrollView style={styles.container}>
      <MainScreen tracking={tracking} onStart={onStart} onStop={onStop} metrics={metrics} />
      <PersonalizedFeedback feedback={feedback} />
      <TrainingSchedule schedule={schedule} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
