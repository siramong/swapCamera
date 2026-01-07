import { StyleSheet, View, Text, Button } from 'react-native';
import { CameraView } from 'expo-camera';
import { useCameraLogic } from '../../lib/modules/camera/useCameraLogic';
import { CameraControls } from '../molecules/CameraControls';

interface CameraViewOrganismProps {
  onPhotoTaken: (uri: string) => void;
}

export function CameraViewOrganism({ onPhotoTaken }: CameraViewOrganismProps) {
  const {
    cameraRef,
    permission,
    requestPermission,
    facing,
    takePicture,
    toggleFacing,
  } = useCameraLogic();

  if (!permission) {
    return <View className="flex-1" />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center bg-dracula-bg">
        <Text className="text-center text-dracula-fg mb-5 px-5">
          We need your permission to use the camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const handleCapture = async () => {
    const uri = await takePicture();
    if (uri) {
      onPhotoTaken(uri);
    }
  };

  return (
    <View className="flex-1">
      <CameraView
        style={styles.camera}
        ref={cameraRef}
        mode="picture"
        facing={facing}
        mute={false}
        responsiveOrientationWhenOrientationLocked
      />
      <CameraControls
        onCapture={handleCapture}
        onToggleFacing={toggleFacing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});
