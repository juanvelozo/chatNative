import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Button, H1, Paragraph, YStack } from 'tamagui';
import { authNavProp } from '../../../navigation/auth/Auth.types';
export const DashboardScreen = (): JSX.Element => {
  //constants

  //states

  //hooks
  const { navigate } = useNavigation<authNavProp>()
  //functions
  function goToLogin() {
    navigate('LoginScreen')
  }
  function goToRegistration() {
    navigate('RegisterScreen')
  }
  //effects

  //render

  return (
    <YStack
      flex={1}
      padding="$5"
      jc="space-around"
    >
      <Image
        source={require('../../../assets/images/auth/dashboardIllustration.png')}
        style={{ width: '100%' }}
      />
      <YStack>
        <H1 textAlign='center'>ChatNative!</H1>
        <Paragraph size="$4" fontWeight="300" textAlign='center'>
          Share your stories with your friends!
        </Paragraph>
      </YStack>
      <YStack gap={10}>
        <Button size="$5" theme="active" bg="$green10" color="white" onPress={goToRegistration}>
          Getting Started
        </Button>
        <Button size="$5" variant="outlined" onPress={goToLogin}>
          Already have an account? Login!
        </Button>
      </YStack>
    </YStack>

  );
}