import { Pressable, View, StyleSheet, PressableProps, StyleProp, ViewStyle } from 'react-native';

interface ShutterButtonProps extends Omit<PressableProps, 'children' | 'style'> {
  mode?: 'picture' | 'video';
  style?: StyleProp<ViewStyle>;
}

export function ShutterButton({ mode = 'picture', style, ...props }: ShutterButtonProps) {
  return (
    <Pressable style={({ pressed }) => [styles.shutterBtn, style, { opacity: pressed ? 0.5 : 1 }]} {...props}>
      <View
        style={[
          styles.shutterBtnInner,
          {
            backgroundColor: mode === 'picture' ? 'white' : 'red',
          },
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shutterBtn: {
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: 'white',
    width: 85,
    height: 85,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterBtnInner: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
