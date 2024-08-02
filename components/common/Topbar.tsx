import { useMemo } from 'react'

import { useNavigation } from '@react-navigation/native'
import { mainNavProp } from '../../navigation/main/Main.types'
import { authNavProp } from '../../navigation/auth/Auth.types'
import { StatusBar } from 'expo-status-bar'
import { Button, Paragraph, XStack } from 'tamagui'

export interface ITopBarProps {
  index?: number
  fullscreen?: boolean
  transparent?: boolean
  iconColor?: string | undefined
  title?: string | undefined
//   titleProps?: ITextProps
  backVisible?: boolean
}

export const TopBar = ({
  index = 0,
  title,
}: ITopBarProps): JSX.Element => {
  //hooks
  const { goBack, navigate, getState } = useNavigation<mainNavProp | authNavProp>()

  // function
 
console.log(getState());

  
  //render
  const navBarRender = useMemo(() => {
      return (
        <>
        <XStack py={12}>
            {/* <ArrowLeft/> */}
             <Button alignSelf="center" size="$6" onPress={goBack}>
        Back
      </Button>
            <Paragraph>

            {getState().routes[index].name}
            </Paragraph>
        </XStack>
        </>
      )
  }, [index])

  return (
    <>
      {navBarRender}
    </>
  )
}
