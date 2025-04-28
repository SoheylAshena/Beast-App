import { useState, useEffect } from 'react';

export function useCoverImage(picture: { data: Uint8Array; format: string }): string {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    if (picture) {
      try {
        const blob = new Blob([picture.data], { type: picture.format });
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
        return () => {
          URL.revokeObjectURL(url);
        };
      } catch (error) {
        console.error('Error extracting cover image:', error);
        setImageUrl('');
      }
    } else {
      console.warn('No cover art found in metadata.');
      setImageUrl('');
    }
  }, [picture]);

  return imageUrl;
}
