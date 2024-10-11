import { StyleSheet } from 'react-native';

/**
 * Styles for the PhotoLetterView component.
 * 
 * This stylesheet defines the layout and appearance of the 
 * PhotoLetterView component, which displays either a user's 
 * photo or the initial of their first name.
 */
const PhotoLetterViewStyles = StyleSheet.create({
  /**
   * Container style for the PhotoLetterView.
   * This style centers the content both vertically and horizontally
   * and ensures the view takes up the full width and height.
   */
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: 25,
  },
  
  /**
   * Style for the image in the PhotoLetterView.
   * Sets the dimensions and border radius to create a circular image.
   */
  image: {
    width: 50,  // Adjust based on your layout
    height: 50, // Adjust based on your layout
    borderRadius: 25, // Circle image
  },
  
  /**
   * Style for the initial text in the PhotoLetterView.
   * Configures the font size and weight for better visibility.
   */
  initial: {
    fontSize: 20, // Adjust based on your design
    fontWeight: 'bold',
  },
});

export default PhotoLetterViewStyles;
