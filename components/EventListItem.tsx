import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';

const EventListItem = ({ event }) => {
  return (
    <View className="gap-3 p-3">
      <View className="flex-row ">
        <View className="flex-1 gap-2 ">
          <Text className="text-lg font-semibold uppercase text-amber-800" numberOfLines={2}>
            Wed 10, Sep &#183; 1930:CET
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
