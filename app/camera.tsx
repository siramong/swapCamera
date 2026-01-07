import { useState } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CameraViewOrganism } from "../components/organisms/CameraViewOrganism";
import { PhotoCard } from "../components/molecules/PhotoCard";
import { useGalleryStore } from "../lib/store/galleryStore";

export default function Camera() {
  const [capturedUri, setCapturedUri] = useState<string | null>(null);
  const { addPhoto } = useGalleryStore();

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
    <GestureHandlerRootView className="flex-1 bg-dracula-bg">
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