import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { AppNavigator } from './navigation'
import { TamaguiProvider } from 'tamagui'
import appConfig from './tamagui.config'
import { useFonts } from 'expo-font'

export default function App() {
    const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

    return (
        <View style={styles.container}>
            <SafeAreaProvider>
                {/* <SessionProvider> */}
                <TamaguiProvider config={appConfig}>
                    <AppNavigator/>
                </TamaguiProvider>
                {/* </SessionProvider> */}
                <StatusBar style="auto" />
            </SafeAreaProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})