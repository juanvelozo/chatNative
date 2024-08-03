import { FC, ReactNode } from 'react';
import { ScrollView, ScrollViewProps, View, ViewStyle, YStack } from 'tamagui';

export interface LayoutProps extends Partial<ViewStyle & ScrollViewProps> {
    children: ReactNode
    withScroll?: true
}

export const Layout: FC<LayoutProps> = ({ children, withScroll, ...props }): JSX.Element => {
    //constants

    //states

    //hooks

    //functions

    //effects

    //render
    if (withScroll) {
        return (
            <ScrollView 
                flex={1}
                padding="$5"
                backgroundColor="$background"
                contentContainerStyle={{ flex: 1 }}
                {...props}
                >
                <View marginVertical={50} />
                {children}
            </ScrollView>
        )
    }
    return (
        <YStack
            flex={1}
            padding="$5"
            backgroundColor="$background"
            {...props}
        >
            <View marginVertical={50} />
            {children}
        </YStack>
    );
}