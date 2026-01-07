import { Pressable, StyleSheet, PressableProps } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface IconButtonProps extends Omit<PressableProps, 'children'> {
  iconName: keyof typeof AntDesign.glyphMap;
  size?: number;
  color?: string;
}

export function IconButton({ iconName, size = 32, color = 'white', style, ...props }: IconButtonProps) {
  return (
    <Pressable style={[styles.button, style]} {...props}>
      {({ pressed }) => (
        <AntDesign name={iconName} size={size} color={color} style={{ opacity: pressed ? 0.5 : 1 }} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
});
