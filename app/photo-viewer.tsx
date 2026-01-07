import { View, StyleSheet, Pressable, Dimensions, StatusBar } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function PhotoViewer() {
  const { uri } = useLocalSearchParams<{ uri: string }>();
  const router = useRouter();
  const [showControls, setShowControls] = useState(true);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <View className="flex-1 bg-black">
      <StatusBar hidden />
      
      <Pressable className="flex-1 justify-center items-center" onPress={toggleControls}>
        <Image
          source={{ uri }}
          contentFit="contain"
          style={styles.image}
        />
      </Pressable>

      {showControls && (
        <View className="absolute top-0 left-0 right-0 pt-12 px-4 pb-4 bg-black/50">
          <Pressable onPress={() => router.back()} className="p-2 w-11 h-11 justify-center items-center">
            <AntDesign name="close" size={28} color="#f8f8f2" />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
