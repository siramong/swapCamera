import { useRef, useState } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

export function useCameraLogic() {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');

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

  return {
    cameraRef,
    permission,
    requestPermission,
    facing,
    takePicture,
    toggleFacing,
  };
}
