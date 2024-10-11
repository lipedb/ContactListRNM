import { StyleSheet } from 'react-native';

/**
 * Styles for the ContactsScreen component.
 *
 * This stylesheet defines the layout and appearance of the 
 * ContactsScreen component, including the contact items.
 */
const ContactsRowStyles = StyleSheet.create({
  /**
   * Container style for individual contact items.
   * This style centers the content both vertically and horizontally
   * and ensures a horizontal layout for the photo and text.
   */
  contactContainer: {
    padding: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row'
  }
});

export default ContactsRowStyles;
