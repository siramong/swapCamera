import { Pressable, StyleSheet, PressableProps, StyleProp, ViewStyle } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface IconButtonProps extends Omit<PressableProps, 'children' | 'style'> {
  iconName: keyof typeof AntDesign.glyphMap;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export function IconButton({ iconName, size = 32, color = 'white', style, ...props }: IconButtonProps) {
  return (
    <Pressable style={({ pressed }) => [styles.button, style, pressed && { opacity: 0.5 }]} {...props}>
      <AntDesign name={iconName} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
});
