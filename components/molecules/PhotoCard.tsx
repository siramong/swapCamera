import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import Animated from 'react-native-reanimated';
import { GestureDetector } from 'react-native-gesture-handler';
import { useSwipeLogic } from '../../lib/ui/useSwipeLogic';

interface PhotoCardProps {
  uri: string;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
}

export function PhotoCard({ uri, onSwipeRight, onSwipeLeft }: PhotoCardProps) {
  const { panGesture, animatedStyle } = useSwipeLogic(onSwipeRight, onSwipeLeft);

  return (
    <View className="flex-1 items-center justify-center">
      <GestureDetector gesture={panGesture}>
        <Animated.View 
          style={animatedStyle} 
          className="w-[350px] h-[450px] rounded-3xl overflow-hidden bg-white shadow-lg"
        >
          <Image source={{ uri }} contentFit="cover" className="w-full h-full" />
          <View className="absolute inset-0 justify-start p-5">
            <View className="flex-row justify-between">
              <Text className="text-5xl font-bold text-dracula-red">✗</Text>
              <Text className="text-5xl font-bold text-dracula-green">✓</Text>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
      <View className="mt-8 items-center">
        <Text className="text-dracula-comment text-sm my-1">← Swipe left to discard</Text>
        <Text className="text-dracula-comment text-sm my-1">Swipe right to save →</Text>
      </View>
    </View>
  );
}
