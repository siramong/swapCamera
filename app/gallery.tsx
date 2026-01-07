import { View, Text, Pressable } from 'react-native';
import { useGalleryStore } from '../lib/store/galleryStore';
import { PhotoGrid } from '../components/molecules/PhotoGrid';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Gallery() {
  const { photos } = useGalleryStore();
  const router = useRouter();

  return (
    <View className="flex-1 bg-dracula-bg">
      <View className="flex-row items-center p-4 pt-12 bg-dracula-current">
        <Pressable onPress={() => router.back()} className="p-2 mr-4">
          <AntDesign name="left" size={24} color="#f8f8f2" />
        </Pressable>
        <Text className="text-2xl font-bold text-dracula-fg">Gallery ({photos.length})</Text>
      </View>
      
      {photos.length === 0 ? (
        <View className="flex-1 justify-center items-center p-5">
          <Text className="text-xl text-dracula-fg mb-2">No photos yet</Text>
          <Text className="text-sm text-dracula-comment text-center">Take some photos and swipe right to save them</Text>
        </View>
      ) : (
        <PhotoGrid photos={photos} />
      )}
    </View>
  );
}