import { View, Text } from 'react-native';
import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '~/context/AuthProvider';

const _layout = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Redirect href="/" />;
  }
  return <Stack />;
};

export default _layout;