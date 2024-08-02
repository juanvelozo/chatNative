import { View,Text } from 'react-native';
import { Button, YStack } from 'tamagui';

export const DashboardScreen = ():JSX.Element => {
//constants

//states

//hooks

//functions

//effects

//render

    return (
        <YStack
        flex={1}
        // borderWidth={2}
        borderColor="$color"
        borderRadius="$4"
        padding="$2"
      >

            <Button bg="$green10" color="white">Getting Started</Button>
            <Button bg="$green10" color="white">Already have an account? Login!</Button>
           <Text>DashboardScreen</Text>
      </YStack>
      
    );
}