import { View, Text } from 'react-native'
import { Stack } from 'expo-router';

export default function () {
    return (
        <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="registration" />
        </Stack>
    )
}