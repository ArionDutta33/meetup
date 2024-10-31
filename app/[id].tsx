import { View, Text, Image } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import events from 'assets/events.json';
import dayjs from 'dayjs';

const EventPage = () => {
  const { id } = useLocalSearchParams();

  const event = events.find((event) => event.id === id);

  if (!event) {
    return <Text>Event not found</Text>;
  }
  return (
    <>
      <View className="flex-1 gap-3 bg-white p-3">
        <Stack.Screen
          options={{ title: event.title, headerBackTitleVisible: false, headerTintColor: 'black' }}
        />
        <Image className="aspect-video w-full rounded-xl" source={{ uri: `${event.image}` }} />
        <Text className="text-3xl font-bold" numberOfLines={2}>
          {event.title}
        </Text>
        <Text className="text-lg font-semibold uppercase text-amber-800">
          {dayjs(event.datetime).format('ddd, D MMM')}&#183;
          {dayjs(event.datetime).format('h:mm A')}
        </Text>
        <Text className="text-lg " numberOfLines={2}>
          {event.description}
        </Text>
      </View>
    </>
  );
};

export default EventPage;
