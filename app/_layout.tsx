import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useColorScheme } from "@/components/useColorScheme";
import { Stack } from 'expo-router';

import "../global.css";

export {
  ErrorBoundary,
} from "expo-router";

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Comfortaa: require("@/assets/fonts/Comfortaa.ttf"),
    IstokWeb: require("@/assets/fonts/IstokWeb.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider mode={colorScheme === "dark" ? "dark" : "light"}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: "horizontal"
            }}
        >
          <Stack.Screen name="index" options={{headerShown: false}} />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
