import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import ContactsStyles from '../styles/ContactsStyles';
import ContactCard from '../components/ContactCard'; // Ensure correct import
import { useSelectedContacts } from '../context/SelectedContactsContext';

const InformationScreen: React.FC = () => {
  const { state: selectedContactsState } = useSelectedContacts();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}>
      {selectedContactsState.selectedContacts.length > 0 ? (
        selectedContactsState.selectedContacts.map(contact => (
          <ContactCard
            key={contact.contactId} // Ensure this is unique
            state={{
              title: contact.firstName + " " + contact.lastName,
              mail: contact.emailAddress || '',
              phone: contact.phoneNumber || '',
              imageUrl: contact.photoUrl || '',
            }}
          />
        ))
      ) : (
        <Text style={ContactsStyles.centerText}>No selected contacts available.</Text>
      )}
    </ScrollView>
  );
};

export default InformationScreen;