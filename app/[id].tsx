import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import dayjs from 'dayjs';
import { supabase } from '~/utils/supabase';

const EventPage = () => {
  const { id } = useLocalSearchParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    setLoading(true);
    let { data, error } = await supabase.from('event').select('*').eq('id', id).single();
    console.log(data);
    console.log(error);
    setEvent(data);
    setLoading(false);
  };

  if (loading) return <ActivityIndicator />;

  if (!event) {
    return <Text>Event not found</Text>;
  }
  return (
    <>
      <View className="flex-1 gap-3 bg-white p-3">
        <Stack.Screen
          options={{ title: event.title, headerBackTitleVisible: false, headerTintColor: 'black' }}
        />
        <Image className="aspect-video w-full rounded-xl" source={{ uri: `${event.image_uri}` }} />
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
        {/* foter */}
        <View className="bordert-2 absolute bottom-0 left-0  right-0 flex-row items-center justify-between border-t-2 border-gray-300   p-5 pb-10">
          <Text className="text-xl font-semibold">Free</Text>
          <Pressable className="  rounded-md bg-red-500 p-5 px-8">
            <Text className="text-lg font-bold text-white">Join and RSVP</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default EventPage;
