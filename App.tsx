// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ContactsScreen from './src/screens/ContactsScreen';

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
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: IconName = 'people-outline'; // Use the defined IconName type

            // Determine the icon name based on the current route
            if (route.name === 'Contacts') {
              iconName = 'people-outline'; // Ionicons icon for Contacts
            }

            // Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato', // Active tab color
          tabBarInactiveTintColor: 'gray',  // Inactive tab color
        })}
      >
        {/* Define the Contacts tab */}
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
