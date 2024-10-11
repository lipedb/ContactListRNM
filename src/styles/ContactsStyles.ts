import { StyleSheet } from 'react-native';

/**
 * Styles for the Contacts Screen.
 *
 * @typedef {object} ContactsStyles
 * @property {object} container - Style for the main container of the Contacts screen.
 * @property {number} container.flex - Set to 1 to make the container fill the available space.
 * @property {string} container.justifyContent - Centers the content vertically.
 * @property {string} container.alignItems - Centers the content horizontally.
 * @property {object} text - Style for the text in the Contacts screen.
 * @property {number} text.fontSize - Font size for the text.
 * 
 * @constant
 * @type {ContactsStyles}
 */
const ContactsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default ContactsStyles;