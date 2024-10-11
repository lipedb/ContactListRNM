import React from 'react';
import { View, Image, Text } from 'react-native';
import PhotoLetterViewStyles from '../styles/PhotoLetterViewStyles';

interface PhotoLetterViewProps {
  photoUrl?: string;  // Optional photo URL
  firstName: string;  // First name to show if no photo is provided
}

/**
 * Renders a photo or the initial of the first name if the photo is not available.
 *
 * @param {PhotoLetterViewProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered component.
 */
const PhotoLetterView: React.FC<PhotoLetterViewProps> = ({ photoUrl, firstName }) => {
  return (
    <View style={PhotoLetterViewStyles.container}>
      {photoUrl ? (
        <Image source={{ uri: photoUrl }} style={PhotoLetterViewStyles.image} />
      ) : (
        <Text style={PhotoLetterViewStyles.initial}>{"(" + firstName.charAt(0).toUpperCase() + ")"}</Text>
      )}
    </View>
  );
};

export default PhotoLetterView;