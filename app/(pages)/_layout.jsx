import { Stack } from "expo-router";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";

export default function HomeLayout() {
  // const theme = useColorScheme(); // Detect system dark/light mode

  return (
    <>
      {/* Hide status bar only on fullscreen screens */}
      <StatusBar hidden={true}  />
      
      <Stack>
        <Stack.Screen name="models" options={{ headerShown: false }} />

      </Stack>
    </>
  );
}
