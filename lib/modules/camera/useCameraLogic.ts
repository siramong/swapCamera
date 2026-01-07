import { useRef, useState } from 'react';
import { CameraView, CameraType, CameraMode, useCameraPermissions } from 'expo-camera';

export function useCameraLogic() {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');
  const [mode, setMode] = useState<CameraMode>('picture');

  const takePicture = async (): Promise<string | null> => {
    try {
      const photo = await cameraRef.current?.takePictureAsync();
      return photo?.uri || null;
    } catch (error) {
      console.error('Error taking picture:', error);
      return null;
    }
  };

  const toggleFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const toggleMode = () => {
    setMode((current) => (current === 'picture' ? 'video' : 'picture'));
  };

  return {
    cameraRef,
    permission,
    requestPermission,
    facing,
    mode,
    takePicture,
    toggleFacing,
    toggleMode,
  };
}
