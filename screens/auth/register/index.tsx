import { Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Layout } from '../../../components/common/Layout';
import { Button, Form, H1, H4, Input, Paragraph } from 'tamagui';

export const RegisterScreen = (): JSX.Element => {
    //constants

    //states

    //hooks

    //functions

    //effects

    //render

    return (
        <Layout withScroll >
            <KeyboardAvoidingView style={{ justifyContent: "space-between", flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} >
                <H1>Sign Up!</H1>
                <Paragraph>
                    Please, fill the information to register your account
                </Paragraph>
                <Image
                    source={require('../../../assets/images/illustrations/Selfie.png')}
                    style={{ width: '100%', height: 400 }}
                />
                <Form
                    alignItems="center"
                    minWidth={300}
                    width="100%"
                    gap="$4"
                //   onSubmit={() => setStatus('submitting')}
                >
                    <Input size="$5" placeholder='Name' width="100%" />
                    <Input size="$5" placeholder='Email' width="100%" />
                    <Input size="$5" placeholder='Password' width="100%" />


                    <Form.Trigger asChild>
                        <Button width="100%" theme="active" bg="$green10" color="white" size="$5">
                            Register
                        </Button>
                    </Form.Trigger>
                    <Button width="100%" size="$5" themeInverse>
                        I already have an account
                    </Button>
                </Form>
            </KeyboardAvoidingView>
        </Layout>
    );
}