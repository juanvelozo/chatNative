import { ParamListBase, RouteProp } from '@react-navigation/core'
import { ComponentType } from 'react'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LoginScreen } from '../../screens/auth/login'
import { RegisterScreen } from '../../screens/auth/register'
import { DashboardScreen } from '../../screens/auth/dashboard'

// All the routes in the navigator
export type AuthStackNavigator = {
    DashboardScreen: undefined
    LoginScreen: undefined
    RegisterScreen: undefined
}

// An enum to enumerate all routes
export enum AuthStackRoutesEnum {
    Dashboard = 'DashboardScreen',
    Login = 'LoginScreen',
    Register = 'RegisterScreen',
}

// Typing the "component" attribute in Stack.Screen
export type ScreenComponentType<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList,
> =
    | React.ComponentType<{
        route: RouteProp<ParamList, RouteName>
        navigation: unknown
    }>
    | ComponentType<object>

// This is a selector for all the values in the enum
type RouteComponentsType = {
    [x in AuthStackRoutesEnum]: ScreenComponentType<
        AuthStackNavigator,
        AuthStackRoutesEnum
    >
}

// Here, we select the component according to the value in the array
export const AuthComponents: RouteComponentsType = {
    [AuthStackRoutesEnum.Dashboard]: DashboardScreen,
    [AuthStackRoutesEnum.Login]: LoginScreen,
    [AuthStackRoutesEnum.Register]: RegisterScreen,
}

export type authNavProp = NativeStackNavigationProp<AuthStackNavigator>