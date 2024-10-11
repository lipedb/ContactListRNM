import { SelectedContactsState, ActionType } from '../models/SelectedContactsState';

export const updateSelectedContacts = (state: SelectedContactsState, action: ActionType): SelectedContactsState => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        selectedContacts: [...state.selectedContacts, action.contact],
      };
    case 'REMOVE_CONTACT':
      return {
        ...state,
        selectedContacts: state.selectedContacts.filter(
          (contact) => contact.contactId !== action.contactId
        ),
      };
    default:
      return state;
  }
};