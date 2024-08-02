import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { AppNavigator } from './navigation'

export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaProvider>
                {/* <SessionProvider> */}
                    <AppNavigator/>
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