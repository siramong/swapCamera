import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useGalleryStore } from "../lib/store/galleryStore";

export default function Index() {
  const router = useRouter();
  const { photos } = useGalleryStore();

  return (
    <View className="flex-1 bg-dracula-bg p-5 justify-center">
      <View className="items-center mb-15">
        <Text className="text-5xl font-bold text-dracula-purple mb-2">SwapCamera</Text>
        <Text className="text-2xl text-dracula-pink">Snap & Swipe</Text>
      </View>
      
      <View className="gap-5 mb-10">
        <Pressable
          className="bg-dracula-purple p-5 rounded-xl flex-row items-center justify-center gap-3"
          onPress={() => router.push("/camera")}
        >
          <AntDesign name="camera" size={32} color="#f8f8f2" />
          <Text className="text-dracula-fg text-lg font-semibold">Open Camera</Text>
        </Pressable>

        <Pressable
          className="bg-dracula-current p-5 rounded-xl flex-row items-center justify-center gap-3 border-2 border-dracula-purple"
          onPress={() => router.push("/gallery")}
        >
          <MaterialIcons name="photo-library" size={32} color="#f8f8f2" />
          <Text className="text-dracula-fg text-lg font-semibold">View Gallery ({photos.length})</Text>
        </Pressable>
      </View>

      <View className="bg-dracula-current p-5 rounded-xl border-l-4 border-dracula-green">
        <Text className="text-dracula-green text-lg font-bold mb-3">How to use:</Text>
        <Text className="text-dracula-fg text-sm my-1">1. Open the camera</Text>
        <Text className="text-dracula-fg text-sm my-1">2. Take a photo</Text>
        <Text className="text-dracula-fg text-sm my-1">3. Swipe right to save ✓</Text>
        <Text className="text-dracula-fg text-sm my-1">4. Swipe left to discard ✗</Text>
        <Text className="text-dracula-fg text-sm my-1">5. View saved photos in gallery</Text>
      </View>
    </View>
  );
}
