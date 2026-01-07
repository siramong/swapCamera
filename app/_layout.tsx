import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#282a36" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="camera" />
      <Stack.Screen name="gallery" />
    </Stack>
  );
}
