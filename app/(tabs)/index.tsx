import { Stack } from 'expo-router';
import { FlatList, Image, Text, View } from 'react-native';
import EventListItem from '~/components/EventListItem';
import { supabase } from '~/utils/supabase';
import { useEffect, useState } from 'react';
export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    let { data, error } = await supabase.from('event').select('*');

    setEvents(data);
  };
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
