import { LiveSwitchState } from '../models/LiveSwitchState';

/**
 * Update function for managing Live switch state.
 * @param state - The current state model.
 * @param action - The action to perform on the state.
 * @returns The updated state model.
 */
export const updateLiveState = (state: LiveSwitchState, action: 'TOGGLE_LIVE'): LiveSwitchState => {
  switch (action) {
    case 'TOGGLE_LIVE':
      return { ...state, isLive: !state.isLive }; // Toggle the Live switch state
    default:
      return state; // Return unchanged state for unknown actions
  }
};