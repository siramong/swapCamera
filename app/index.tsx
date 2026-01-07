import { Text, View, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useGalleryStore } from "../lib/store/galleryStore";
import "@/global.css"

export default function Index() {
  const router = useRouter();
  const { photos } = useGalleryStore();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SwapCamera</Text>
        <Text style={styles.subtitle}>Snap & Swipe</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.primaryButton}
          onPress={() => router.push("/camera")}
        >
          <AntDesign name="camera" size={32} color="#f8f8f2" />
          <Text style={styles.buttonText}>Open Camera</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push("/gallery")}
        >
          <MaterialIcons name="photo-library" size={32} color="#f8f8f2" />
          <Text style={styles.buttonText}>View Gallery ({photos.length})</Text>
        </Pressable>
      </View>

      <View style={styles.instructions}>
        <Text style={styles.instructionTitle}>How to use:</Text>
        <Text style={styles.instructionText}>1. Open the camera</Text>
        <Text style={styles.instructionText}>2. Take a photo</Text>
        <Text style={styles.instructionText}>3. Swipe right to save ✓</Text>
        <Text style={styles.instructionText}>4. Swipe left to discard ✗</Text>
        <Text style={styles.instructionText}>5. View saved photos in gallery</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282a36",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 60,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#bd93f9",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 24,
    color: "#ff79c6",
  },
  buttonContainer: {
    gap: 20,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: "#bd93f9",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  secondaryButton: {
    backgroundColor: "#44475a",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    borderWidth: 2,
    borderColor: "#bd93f9",
  },
  buttonText: {
    color: "#f8f8f2",
    fontSize: 18,
    fontWeight: "600",
  },
  instructions: {
    backgroundColor: "#44475a",
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#50fa7b",
  },
  instructionTitle: {
    color: "#50fa7b",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  instructionText: {
    color: "#f8f8f2",
    fontSize: 14,
    marginVertical: 4,
  },
});
