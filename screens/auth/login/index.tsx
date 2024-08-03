import { Image, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { Layout } from '../../../components/common/Layout';
import { Button, Form, H1, H4, Input, Text } from 'tamagui';

export const LoginScreen = (): JSX.Element => {
    //constants

    //states

    //hooks

    //functions

    //effects

    //render

    return (
        <Layout>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <H1>Sign In!</H1>
                <Image
                    source={require('../../../assets/images/illustrations/Podcast.png')}
                    style={{ width: '100%', height: 200 }}
                />
                <Form
                    alignItems="center"
                    minWidth={300}
                    width="100%"
                    gap="$4"
                    my="$10"
                //   onSubmit={() => setStatus('submitting')}
                >
                    <Input size="$5" placeholder='Email' width="100%" />
                    <Input size="$5" placeholder='Password' width="100%" />
                    <Pressable style={{width:'100%'}}>
                        <Text textAlign='right' alignSelf='flex-end' color="$green10" fontWeight="bold">
                            I forgot my password
                        </Text>
                    </Pressable>
                    <Form.Trigger asChild>
                        <Button width="100%" theme="active" bg="$green10" color="white" size="$5">
                            Login
                        </Button>
                    </Form.Trigger>
                    <Button width="100%" size="$5" variant="outlined">
                        I don't have an account
                    </Button>
                </Form>
            </KeyboardAvoidingView>
        </Layout>
    );
}