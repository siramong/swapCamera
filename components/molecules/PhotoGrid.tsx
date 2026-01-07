import { FlatList, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import type { Photo } from '../../lib/store/galleryStore';

interface PhotoGridProps {
  photos: Photo[];
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_SIZE = SCREEN_WIDTH / 3 - 4;

export function PhotoGrid({ photos }: PhotoGridProps) {
  const router = useRouter();

  const handlePhotoPress = (uri: string) => {
    router.push({ pathname: '/photo-viewer', params: { uri } });
  };

  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.uri}
      numColumns={3}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <Pressable 
          style={styles.item}
          onPress={() => handlePhotoPress(item.uri)}
        >
          <Image
            source={{ uri: item.uri }}
            contentFit="cover"
            style={styles.image}
          />
        </Pressable>
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
