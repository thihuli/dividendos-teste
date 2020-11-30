import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <Text>Olá Dash</Text>
      <Button 
        onPress={() => navigation.navigate('Notification')}
        title="Notification"
        color="#325986"
        accessibilityLabel="Learn more about this blue button"
      />
    </View>
  );
}

export default Dashboard;