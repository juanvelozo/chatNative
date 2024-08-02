import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthComponents, AuthStackNavigator, AuthStackRoutesEnum } from './Auth.types'


const { Navigator, Screen } = createNativeStackNavigator<AuthStackNavigator>()

export function AuthNavigator() {
    return (
        <Navigator initialRouteName={AuthStackRoutesEnum.Dashboard}>
            {Object.values(AuthStackRoutesEnum).map((route, index) => {
                return (
                    <Screen
                        key={index}
                        name={route}
                        component={AuthComponents[route]}
                        options={{
                            headerShown: route !== AuthStackRoutesEnum.Dashboard,
                            animation: 'slide_from_left',
                        }}
                    />
                )
            })}
        </Navigator>
    )
}