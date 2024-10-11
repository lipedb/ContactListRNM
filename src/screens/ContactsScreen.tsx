// ContactsScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ContactsStyles from '../styles/ContactsStyles';
import { fetchContacts } from '../api/Api'; // Import the fetchContacts function
import { Contact } from '../models/Contact'; // Import the Contact type
import StatusSnackBar from '../components/StatusSnackBar'; // Import your StatusSnackBar component

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

  // Use useEffect to listen for changes in liveSwitchState
  useEffect(() => {
    fetchAndSetContacts(liveSwitchState.isLive); // Fetch contacts when live state changes
  }, [liveSwitchState.isLive]); // Dependency array to trigger effect on state change

  return (
    <View style={ContactsStyles.container}>
      <Text style={ContactsStyles.text}>Contacts Screen</Text>

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
          <Text key={contact.contactId} style={ContactsStyles.text}>
            {contact.firstName}
          </Text>
        ))
      ) : (
        !loading && <Text style={ContactsStyles.text}>No contacts available.</Text>
      )}
    </View>
  );
};

export default ContactsScreen;