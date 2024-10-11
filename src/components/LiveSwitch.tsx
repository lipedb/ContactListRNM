import React from 'react';
import { View, Text, Switch } from 'react-native';
import { LiveSwitchState } from '../models/LiveSwitchState';
import LiveSwitchStyles from '../styles/LiveSwitchStyles';

/**
 * Props for the LiveSwitch component.
 */
interface LiveSwitchProps {
  state: LiveSwitchState; // The current state of the Live switch
  onToggle: () => void; // Function to call when the switch is toggled
}

/**
 * Component representing the Live switch.
 */
const LiveSwitch: React.FC<LiveSwitchProps> = ({ state, onToggle }) => {
  return (
    <View style={LiveSwitchStyles.container}>
      <Text style={LiveSwitchStyles.label}>Live</Text>
      <Switch value={state.isLive} onValueChange={onToggle} />
    </View>
  );
};

export default LiveSwitch;