import { Stack } from 'expo-router';
import { FlatList, Image, Text, View } from 'react-native';
import EventListItem from '~/components/EventListItem';
import events from 'assets/events.json';
export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <FlatList
        showsVerticalScrollIndicator={true}
        className="bg-white"
        data={events}
        renderItem={({ item }) => <EventListItem event={item} />}
      />
    </>
  );
}
