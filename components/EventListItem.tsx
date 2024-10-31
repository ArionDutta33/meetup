import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import dayjs from 'dayjs';
const EventListItem = ({ event }) => {
  return (
    <View className="m-3 gap-3 border-b-2 border-gray-100 pb-3">
      <View className="flex-row ">
        <View className="flex-1 gap-2 ">
          <Text className="text-lg font-semibold uppercase text-amber-800" numberOfLines={2}>
            {dayjs(event.datetime).format('ddd, D MMM')}&#183;
            {dayjs(event.datetime).format('h:mm A')}
          </Text>
          <Text className="text-xxl font-bold">{event.title}</Text>
          <Text className="text-gray-700">{event.location}</Text>
        </View>
        {/* image */}
        <Image className="aspect-video w-2/5 rounded-xl" source={{ uri: `${event.image}` }} />
      </View>
      {/* footer */}

      <View className="flex-row gap-3">
        <Text className="mr-auto text-gray-700">16 going</Text>
        <Entypo name="share-alternative" size={20} color="gray" />
        <Entypo name="bookmark" size={20} color="gray" />
      </View>
    </View>
  );
};

export default EventListItem;

const styles = StyleSheet.create({});
