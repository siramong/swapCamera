import { useSharedValue, useAnimatedStyle, withSpring, withTiming, runOnJS } from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

const SWIPE_THRESHOLD = 100;
const ROTATION_FACTOR = 0.1;

export function useSwipeLogic(onSwipeRight: () => void, onSwipeLeft: () => void) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      const shouldDismissRight = translateX.value > SWIPE_THRESHOLD;
      const shouldDismissLeft = translateX.value < -SWIPE_THRESHOLD;

      if (shouldDismissRight) {
        translateX.value = withTiming(500, { duration: 300 }, () => {
          runOnJS(onSwipeRight)();
          translateX.value = 0;
          translateY.value = 0;
        });
      } else if (shouldDismissLeft) {
        translateX.value = withTiming(-500, { duration: 300 }, () => {
          runOnJS(onSwipeLeft)();
          translateX.value = 0;
          translateY.value = 0;
        });
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const rotation = translateX.value * ROTATION_FACTOR;
    
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotation}deg` },
      ],
    };
  });

  const resetPosition = () => {
    translateX.value = withSpring(0);
    translateY.value = withSpring(0);
  };

  return {
    panGesture,
    animatedStyle,
    resetPosition,
  };
}
