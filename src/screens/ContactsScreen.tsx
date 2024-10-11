import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ContactsStyles from '../styles/ContactsStyles'; // Adjusted to import from the new ContactsStyles
import { fetchContacts } from '../api/Api'; // Import the fetchContacts function
import { Contact } from '../models/Contact'; // Import the Contact type
import StatusSnackBar from '../components/StatusSnackBar'; // Import your StatusSnackBar component
import PhotoLetterView from '../components/PhotoLetterView'; // Import your PhotoLetterView component
import ContactsRowStyles from '../styles/ContactsRowStyles';
import SelectButton from '../components/SelectButton';
import { useSelectedContacts } from '../context/SelectedContactsContext';

// Define the props interface
interface ContactsScreenProps {
  liveSwitchState: { isLive: boolean }; // Define the type for the live switch state
}

const ContactsScreen: React.FC<ContactsScreenProps> = ({ liveSwitchState }) => {
  // State to hold the fetched contacts
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [snackVisible, setSnackVisible] = useState<boolean>(false); // State for SnackBar visibility

  // Use the selected contacts context
  const { state: selectedContactsState, dispatch } = useSelectedContacts();

  // Function to fetch contacts based on live switch state
  const fetchAndSetContacts = async (isLive: boolean) => {
    setLoading(true);
    setError(null); // Reset the error state before fetching
    try {
      const fetchedContacts = await fetchContacts(isLive);
      setContacts(fetchedContacts); // Update the contacts state
      setSnackVisible(false); // Hide SnackBar on successful fetch
    } catch (err) {
      console.error(err);
      setError('Failed to fetch contacts'); // Set error if fetching fails
      setSnackVisible(true); // Show SnackBar on error
    } finally {
      setLoading(false);
    }
  };

  // Function to insert or remove contacts from selected state
  const toggleContactSelection = (contact: Contact) => {
    if (selectedContactsState.selectedContacts.some(selected => selected.contactId === contact.contactId)) {
      dispatch({ type: 'REMOVE_CONTACT', contactId: contact.contactId });
    } else {
      dispatch({ type: 'ADD_CONTACT', contact });
    }
  };

  // Use useEffect to listen for changes in liveSwitchState
  useEffect(() => {
    fetchAndSetContacts(liveSwitchState.isLive); // Fetch contacts when live state changes
  }, [liveSwitchState.isLive]); // Dependency array to trigger effect on state change

  return (
    <View style={ContactsStyles.container}>
      {/* StatusSnackBar for loading state */}
      <StatusSnackBar
        visible={loading}
        onDismiss={() => setSnackVisible(false)}
        message="Loading contacts..."
      />

      {/* StatusSnackBar for error state */}
      <StatusSnackBar
        visible={snackVisible && error !== null}
        onDismiss={() => setSnackVisible(false)}
        message={error || ''}
      />

      {contacts.length > 0 ? (
        contacts.map((contact) => (
        <TouchableOpacity style={ContactsRowStyles.contactContainer}
         key={contact.contactId}
         onPress={() => toggleContactSelection(contact)}>
        <View style={{marginRight: 9}}>
            <PhotoLetterView
                photoUrl={contact.photoUrl || undefined} // Convert null to undefined
                firstName={contact.firstName}
            />
        </View>
        <View style={{flex: 1}}>
            <Text style={{fontSize: 20}}>{contact.firstName}</Text>
        </View>
        <View style={{marginRight: 9}}>
            <SelectButton
                state={{ isSelected: selectedContactsState.selectedContacts.some(selected => selected.contactId === contact.contactId) }} 
                onPress={() => toggleContactSelection(contact)} // Toggle selection on press
                />
            </View>
        </TouchableOpacity>
        ))
      ) : (
        !loading && <Text style={ContactsStyles.text}>No contacts available.</Text>
      )}
    </View>
  );
};

export default ContactsScreen;