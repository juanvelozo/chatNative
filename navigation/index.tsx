import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native'
import { useRef } from 'react'
import { RootStackNavigator } from './main/Main.types'
import { MainNavigator } from './main/Main.navigation'

export const AppNavigator = () => {
    // refs
    const navigationRef =
        useRef<NavigationContainerRef<RootStackNavigator>>(null)

    // hooks

    // render
    return (
        <NavigationContainer ref={navigationRef}>
            {/* {isAuthenticated ? <MainNavigator /> : <AuthNavigator/>  */}
            <MainNavigator /> 
        </NavigationContainer>
    )
}