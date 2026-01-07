import { View, StyleSheet, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ShutterButton } from '../atoms/ShutterButton';

interface CameraControlsProps {
  mode: 'picture' | 'video';
  onToggleMode: () => void;
  onCapture: () => void;
  onToggleFacing: () => void;
}

export function CameraControls({ mode, onToggleMode, onCapture, onToggleFacing }: CameraControlsProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onToggleMode}>
        {mode === 'picture' ? (
          <AntDesign name="picture" size={32} color="white" />
        ) : (
          <Feather name="video" size={32} color="white" />
        )}
      </Pressable>
      
      <ShutterButton mode={mode} onPress={onCapture} />
      
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
});
