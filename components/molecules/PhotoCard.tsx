import { StyleSheet, Text, View } from 'react-native';
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
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <Image source={{ uri }} contentFit="cover" style={styles.image} />
          <View style={styles.overlay}>
            <View style={styles.indicator}>
              <Text style={[styles.indicatorText, styles.leftIndicator]}>✗</Text>
              <Text style={[styles.indicatorText, styles.rightIndicator]}>✓</Text>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
      <View style={styles.instructions}>
        <Text style={styles.instructionText}>← Swipe left to discard</Text>
        <Text style={styles.instructionText}>Swipe right to save →</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    height: 450,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    padding: 20,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indicatorText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  leftIndicator: {
    color: '#ff5555',
  },
  rightIndicator: {
    color: '#50fa7b',
  },
  instructions: {
    marginTop: 30,
    alignItems: 'center',
  },
  instructionText: {
    color: '#6272a4',
    fontSize: 14,
    marginVertical: 4,
  },
});
