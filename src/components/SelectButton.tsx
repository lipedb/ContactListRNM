import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SelectButtonState } from '../models/SelectButtonState';
import SelectButtonStyles from '../styles/SelectButtonStyles';

interface SelectButtonProps {
  state: SelectButtonState;
  onPress: () => void;
}

/**
 * A button that allows the user to select a contact.
 *
 * @param {SelectButtonProps} props - The properties of the SelectButton component.
 * @returns {JSX.Element} The rendered select button component.
 */
const SelectButton: React.FC<SelectButtonProps> = ({ state, onPress }) => {
  return (
    <TouchableOpacity style={SelectButtonStyles.button} onPress={onPress}>
      <Text style={SelectButtonStyles.text}>
        {state.isSelected ? 'Selected' : 'Select'}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectButton;