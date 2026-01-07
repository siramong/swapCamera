import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CameraViewOrganism } from "../components/organisms/CameraViewOrganism";
import { PhotoCard } from "../components/molecules/PhotoCard";
import { useGalleryStore } from "../lib/store/galleryStore";
import { useRouter } from "expo-router";

export default function Camera() {
  const [capturedUri, setCapturedUri] = useState<string | null>(null);
  const { addPhoto } = useGalleryStore();
  const router = useRouter();

  const handlePhotoTaken = (uri: string) => {
    setCapturedUri(uri);
  };

  const handleSwipeRight = () => {
    if (capturedUri) {
      addPhoto(capturedUri);
      setCapturedUri(null);
    }
  };

  const handleSwipeLeft = () => {
    setCapturedUri(null);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {capturedUri ? (
        <PhotoCard
          uri={capturedUri}
          onSwipeRight={handleSwipeRight}
          onSwipeLeft={handleSwipeLeft}
        />
      ) : (
        <CameraViewOrganism onPhotoTaken={handlePhotoTaken} />
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282a36",
  },
});