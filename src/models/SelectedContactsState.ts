import { Contact } from '../models/Contact';

/**
 * State model for the SelectedContacts component.
 */
export interface SelectedContactsState {
    selectedContacts: Contact[];
}


// Define the action types
export type ActionType = 
| { type: 'ADD_CONTACT'; contact: Contact }
| { type: 'REMOVE_CONTACT'; contactId: string };