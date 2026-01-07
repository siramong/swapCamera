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
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
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
    <View style={styles.container}>
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
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282a36',
  },
  permissionText: {
    textAlign: 'center',
    color: '#f8f8f2',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
