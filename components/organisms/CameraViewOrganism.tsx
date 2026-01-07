import { StyleSheet, View, Text, Button } from 'react-native';
import { CameraView } from 'expo-camera';
import { useCameraLogic } from '../../lib/modules/camera/useCameraLogic';
import { CameraControls } from '../molecules/CameraControls';

interface CameraViewOrganimProps {
  onPhotoTaken: (uri: string) => void;
}

export function CameraViewOrganism({ onPhotoTaken }: CameraViewOrganimProps) {
  const {
    cameraRef,
    permission,
    requestPermission,
    facing,
    mode,
    takePicture,
    toggleFacing,
    toggleMode,
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
    if (mode === 'picture') {
      const uri = await takePicture();
      if (uri) {
        onPhotoTaken(uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        ref={cameraRef}
        mode={mode}
        facing={facing}
        mute={false}
        responsiveOrientationWhenOrientationLocked
      />
      <CameraControls
        mode={mode}
        onToggleMode={toggleMode}
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
