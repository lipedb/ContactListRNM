import { CardState } from "../models/CardState";

/**
 * Update function for managing Card state.
 * 
 * This function takes the current state and an action, and returns 
 * the updated state based on the action type.
 * 
 * @param state - The current state model.
 * @param action - The action to perform on the state, which contains type and payload.
 * @returns The updated state model.
 */
export const updateCard = (state: CardState, action: { type: string; payload?: Partial<CardState> }): CardState => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return { ...state, title: action.payload?.title || state.title };
    case 'UPDATE_MAIL':
      return { ...state, mail: action.payload?.mail || state.mail };
    case 'UPDATE_PHONE':
      return { ...state, phone: action.payload?.phone || state.phone };
    case 'UPDATE_IMAGE':
      return { ...state, imageUrl: action.payload?.imageUrl || state.imageUrl };
    default:
      return state;
  }
};