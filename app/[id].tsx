import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import events from 'assets/events.json';
const EventPage = () => {
  const { id } = useLocalSearchParams();

  const event = events.find((event) => event.id === id);
  return (
    <View>
      <Text>Welcome user id: {id}</Text>
      <Text>{event.title}</Text>
    </View>
  );
};

export default EventPage;
