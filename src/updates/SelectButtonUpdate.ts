import { SelectButtonState } from "../models/SelectButtonState";

/**
 * Update function for managing Select Button state.
 * @param state - The current state model.
 * @param action - The action to perform on the state.
 * @returns The updated state model.
 */
export const updateSelectButton = (state: SelectButtonState, action: string): SelectButtonState => {
    switch (action) {
      case 'TOGGLE_SELECT':
        return { ...state, isSelected: !state.isSelected };
      default:
        return state;
    }
  };  