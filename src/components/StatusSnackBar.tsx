import React from 'react';
import { Snackbar } from 'react-native-paper';

interface StatusSnackBarProps {
  visible: boolean; // Visibility state of the SnackBar
  onDismiss: () => void; // Function to call when dismissing the SnackBar
  message: string; // Message to display in the SnackBar
  duration?: number; // Optional duration for SnackBar display
}

/**
 * A custom SnackBar component for displaying notifications.
 *
 * @param {StatusSnackBarProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered SnackBar component.
 */
const StatusSnackBar: React.FC<StatusSnackBarProps> = ({
  visible,
  onDismiss,
  message,
  duration = Snackbar.DURATION_SHORT, // Default duration
}) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={duration}
    >
      {message}
    </Snackbar>
  );
};

export default StatusSnackBar;
