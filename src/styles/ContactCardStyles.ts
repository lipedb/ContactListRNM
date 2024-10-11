import { StyleSheet } from 'react-native';

const ContactCardStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    borderColor: '#ddd',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 25,
    maxHeight: 300,
    minHeight: 150,
    margin: 5
  },
  headerContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 25,
    marginLeft: 10,
  },
  photoContainer: {
    marginRight: 9,
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 20,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 20,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 15,
  },
});

export default ContactCardStyles;