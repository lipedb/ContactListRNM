import { StyleSheet } from 'react-native';

/**
 * Styles for the SelectButton component.
 * 
 * This stylesheet defines the appearance of the select button 
 * used in the `ContactItem` component. The button is aligned to 
 * the right side of its container and includes padding to ensure 
 * proper spacing. The text within the button is styled to be bold, 
 * with a distinct tomato color to highlight the selected state.
 *
 * @property {object} button - Defines the container of the button, with padding and alignment.
 * @property {object} text - Styles the button text with color, font size, and weight.
 */
const SelectButtonStyles = StyleSheet.create({
  button: {
    padding: 10,              // Adds padding around the button
    justifyContent: 'center',  // Centers content vertically
    alignItems: 'flex-end',    // Aligns the button to the right
  },
  text: {
    color: 'tomato',           // Sets text color to tomato
    fontSize: 20,              // Sets the font size to 16
    fontWeight: 'bold',        // Makes the text bold
  },
});

export default SelectButtonStyles;