import React from 'react';
import { View, Text } from 'react-native';
import ContactsStyles from '../styles/ContactsStyles';

const ContactsScreen: React.FC = () => {
  return (
    <View style={ContactsStyles.container}>
      <Text style={ContactsStyles.text}>Contacts Screen</Text>
    </View>
  );
};

export default ContactsScreen;