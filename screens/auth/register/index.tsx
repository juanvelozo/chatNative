import { Alert, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Layout } from '../../../components/common/Layout';
import { Button, Form, H1, H4, Input, Paragraph } from 'tamagui';
import { useRef, useState } from 'react';
import { supabase } from '../../../lib/supabase';

export const RegisterScreen = (): JSX.Element => {
    //constants
    const emailRef = useRef<Input>(null)
    //states
    const [loading, setLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<{ name?: string, email?: string, password?: string }>({})
    //hooks

    //functions
    async function signUpWithEmail() {
        setLoading(true)
        try {
            const {
                data: { session },
                error,
            } = await supabase.auth.signUp({
                email: formData.email || '',
                password: formData.password || '',
                options:{
                    data:{
                        name: formData.name
                    }
                }
            })
            console.log("👋👋👋SESSION", session);
            
            if (error) Alert.alert(error.message)
            if (!session) Alert.alert('Please check your inbox for email verification!')
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }

    }


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
                    gap="$2"
                  onSubmit={signUpWithEmail}
                >
                    <Input size="$5" placeholder='Name' width="100%" onChangeText={value => setFormData(prev => ({
                        ...prev,
                        name: value
                    }))}/>
                    <Input size="$5" placeholder='Email' width="100%" ref={emailRef} onChangeText={value => setFormData(prev => ({
                        ...prev,
                        email: value
                    }))} />
                    <Input size="$5" placeholder='Password' width="100%" secureTextEntry onChangeText={value => setFormData(prev => ({
                        ...prev,
                        password: value
                    }))}/>


                    <Form.Trigger asChild>
                        <Button width="100%" theme="active" bg="$green10" color="white" size="$5" disabled={loading}>
                            {loading ? "Submitting...": "Register"}
                        </Button>
                    </Form.Trigger>
                    <Button width="100%" size="$5" themeInverse disabled={loading}>
                        I already have an account
                    </Button>
                </Form>
            </KeyboardAvoidingView>
        </Layout>
    );
}