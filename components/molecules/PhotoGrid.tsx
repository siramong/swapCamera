import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import type { Photo } from '../../lib/store/galleryStore';

interface PhotoGridProps {
  photos: Photo[];
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_SIZE = SCREEN_WIDTH / 3 - 4;

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.uri}
      numColumns={3}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image
            source={{ uri: item.uri }}
            contentFit="cover"
            style={styles.image}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  item: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    margin: 2,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#44475a',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
