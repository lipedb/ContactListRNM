import { StyleSheet } from 'react-native';

/**
 * Styles for the LiveSwitch component.
 *
 * This stylesheet defines the visual appearance of the LiveSwitch component.
 * It includes styles for the container and the label within the switch.
 *
 * @constant {Object} LiveSwitchStyles - Contains style definitions for the LiveSwitch component.
 * @property {Object} container - Style for the outer container of the switch.
 * @property {Object} label - Style for the label text next to the switch.
 */
const LiveSwitchStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',         // Align items in a row
    justifyContent: 'space-between', // Space items evenly with space around them
    alignItems: 'center',         // Center items vertically
    padding: 10,                  // Padding around the container
    backgroundColor: '#f8f8f8',   // Background color of the container
  },
  label: {
    fontSize: 16,                 // Font size for the label text
  },
});

export default LiveSwitchStyles;