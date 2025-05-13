import 'react-native-url-polyfill/auto';

import { Stack } from "expo-router";
import { StatusBar } from 'react-native';
import './globals.css';

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={true} /> {/* this line hides the phones status bar (battery, time, etc)*/}
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="movies/[id]"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}
