// App.tsx

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ContactsScreen from './src/screens/ContactsScreen';
import InformationScreen from './src/screens/InformationScreen';
import LiveSwitch from './src/components/LiveSwitch';
import { LiveSwitchState } from './src/models/LiveSwitchState';
import { updateLiveState } from './src/updates/LiveSwitchUpdate';

// Create a Tab Navigator
const Tab = createBottomTabNavigator();

// Define valid Ionicons names as a union type
type IconName = 
  | "people-outline" 
  | "information-circle-outline";

/**
 * Main application component.
 *
 * This component serves as the entry point for the app, setting up 
 * the navigation structure using a bottom tab navigator. It includes 
 * two tabs: Contacts and Information. Each tab is associated with 
 * a screen component that is displayed when the tab is active. 
 * Icons are rendered for each tab using Ionicons, enhancing 
 * user experience through visual navigation cues.
 *
 * @returns {JSX.Element} The rendered app component with navigation.
 */
const App: React.FC = () => {
  // Initialize Live switch state
  const [liveSwitchState, setLiveSwitchState] = useState<LiveSwitchState>({ isLive: false }); 

  // Function to handle toggle
  const handleToggle = () => {
    setLiveSwitchState(prevState => updateLiveState(prevState, 'TOGGLE_LIVE')); // Update the Live switch state
  };

  return (
    <NavigationContainer>
      <LiveSwitch state={liveSwitchState} onToggle={handleToggle} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: IconName; // Use the defined IconName type

            // Determine the icon name based on the current route using switch
            switch (route.name) {
              case 'Contacts':
                iconName = 'people-outline'; // Ionicons icon for Contacts
                break;
              case 'Information':
                iconName = 'information-circle-outline'; // Ionicons icon for Information
                break;
              default:
                iconName = 'people-outline'; // Default icon if none match
            }

            // Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato', // Active tab color
          tabBarInactiveTintColor: 'gray',  // Inactive tab color
        })}
      >
        {/* Define the Contacts tab */}
        <Tab.Screen 
          name="Contacts" 
          component={ContactsScreen} 
          options={{ headerShown: false }}
        />
        {/* Define the Information tab */}
        <Tab.Screen 
        name="Information" 
        component={InformationScreen}
        options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;