import { StyleSheet } from 'react-native';

/**
 * Styles for the Information Screen.
 *
 * This object defines the styles used in the Information screen component. 
 * It includes styles for the main container and text elements, 
 * ensuring proper alignment and sizing for a visually appealing layout.
 *
 * @typedef {object} InformationStyles
 * @property {object} container - Style for the main container of the Information screen.
 * @property {number} container.flex - Set to 1 to make the container fill the available space.
 * @property {string} container.justifyContent - Centers the content vertically.
 * @property {string} container.alignItems - Centers the content horizontally.
 * @property {object} text - Style for the text in the Information screen.
 * @property {number} text.fontSize - Font size for the text.
 *
 * @constant
 * @type {InformationStyles}
 */
const InformationStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default InformationStyles;
