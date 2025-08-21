import { View, Text } from 'react-native'
import { Stack } from 'expo-router';

export default function () {
    return (
        <Stack
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: "horizontal"
            }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="registration" options={{ headerShown: false }} />
        </Stack>
    )
}