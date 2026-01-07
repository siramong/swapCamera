import { Pressable, View, StyleSheet, PressableProps } from 'react-native';

interface ShutterButtonProps extends Omit<PressableProps, 'children'> {
  mode?: 'picture' | 'video';
}

export function ShutterButton({ mode = 'picture', style, ...props }: ShutterButtonProps) {
  return (
    <Pressable style={[styles.shutterBtn, style]} {...props}>
      {({ pressed }) => (
        <View style={[styles.shutterBtn, { opacity: pressed ? 0.5 : 1 }]}>
          <View
            style={[
              styles.shutterBtnInner,
              {
                backgroundColor: mode === 'picture' ? 'white' : 'red',
              },
            ]}
          />
        </View>
      )}
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
