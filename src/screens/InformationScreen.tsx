// src/screens/InformationScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';
import InformationStyles from '../styles/InformationStyles';

const InformationScreen: React.FC = () => {
  return (
    <View style={InformationStyles.container}>
      <Text style={InformationStyles.text}>Information Screen</Text>
    </View>
  );
};

export default InformationScreen;
