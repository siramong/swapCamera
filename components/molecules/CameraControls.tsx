import { View, StyleSheet, Pressable } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ShutterButton } from '../atoms/ShutterButton';

interface CameraControlsProps {
  onCapture: () => void;
  onToggleFacing: () => void;
}

export function CameraControls({ onCapture, onToggleFacing }: CameraControlsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.placeholder} />
      
      <ShutterButton onPress={onCapture} />
      
      <Pressable onPress={onToggleFacing}>
        <FontAwesome6 name="rotate-left" size={32} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 44,
    left: 0,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  placeholder: {
    width: 32,
  },
});
