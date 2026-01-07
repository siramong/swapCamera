import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useGalleryStore } from '../lib/store/galleryStore';
import { PhotoGrid } from '../components/molecules/PhotoGrid';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Gallery() {
  const { photos } = useGalleryStore();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="left" size={24} color="#f8f8f2" />
        </Pressable>
        <Text style={styles.title}>Gallery ({photos.length})</Text>
      </View>
      
      {photos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No photos yet</Text>
          <Text style={styles.emptySubtext}>Take some photos and swipe right to save them</Text>
        </View>
      ) : (
        <PhotoGrid photos={photos} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
    backgroundColor: '#44475a',
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f8f8f2',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 20,
    color: '#f8f8f2',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#6272a4',
    textAlign: 'center',
  },
});