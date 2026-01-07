import { useState, useEffect } from 'react';

export interface Photo {
  uri: string;
  timestamp: number;
}

class GalleryStore {
  private photos: Photo[] = [];
  private listeners: Set<() => void> = new Set();

  getPhotos(): Photo[] {
    return this.photos;
  }

  addPhoto(uri: string): void {
    this.photos = [...this.photos, { uri, timestamp: Date.now() }];
    this.emitChange();
  }

  removePhoto(uri: string): void {
    this.photos = this.photos.filter((photo) => photo.uri !== uri);
    this.emitChange();
  }

  clearGallery(): void {
    this.photos = [];
    this.emitChange();
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private emitChange(): void {
    this.listeners.forEach((listener) => listener());
  }
}

const galleryStore = new GalleryStore();

export function useGalleryStore() {
  const [photos, setPhotos] = useState<Photo[]>(galleryStore.getPhotos());

  useEffect(() => {
    const unsubscribe = galleryStore.subscribe(() => {
      setPhotos(galleryStore.getPhotos());
    });
    return unsubscribe;
  }, []);

  return {
    photos,
    addPhoto: (uri: string) => galleryStore.addPhoto(uri),
    removePhoto: (uri: string) => galleryStore.removePhoto(uri),
    clearGallery: () => galleryStore.clearGallery(),
  };
}
