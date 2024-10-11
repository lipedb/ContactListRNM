import React from 'react';
import { View, Text } from 'react-native';
import PhotoLetterView from './PhotoLetterView';
import { CardState } from '../models/CardState';
import ContactCardStyles from '../styles/ContactCardStyles';

interface ContactCardProps {
  state: CardState;
}

/**
 * A card component that displays an image, title, and description.
 * 
 * @param {ContactCardProps} props - The properties for the card component.
 * @returns {JSX.Element} The rendered card component.
 */
const ContactCard: React.FC<ContactCardProps> = ({ state }) => {
  return (
    <View style={ContactCardStyles.cardContainer}>
      <View style={ContactCardStyles.headerContainer}>
        <View style={ContactCardStyles.photoContainer}>
          <PhotoLetterView
            photoUrl={state.imageUrl || undefined}
            firstName={state.title}
          />
        </View>
        <View style={ContactCardStyles.titleContainer}>
          <Text style={ContactCardStyles.titleText}>{state.title}</Text>
        </View>
      </View>  
      <View style={ContactCardStyles.detailsContainer}>
        <Text style={ContactCardStyles.detailText}>{state.mail}</Text>
        <Text style={ContactCardStyles.detailText}>{state.phone}</Text>
      </View>
    </View>
  );
};

export default ContactCard;