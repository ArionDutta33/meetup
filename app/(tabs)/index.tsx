import { Stack } from 'expo-router';
import { Image, Text, View } from 'react-native';
import EventListItem from '~/components/EventListItem';
import events from 'assets/events.json';
export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <EventListItem event={events[0]} />
      <EventListItem event={events[1]} />
      <EventListItem event={events[2]} />
    </>
  );
}
