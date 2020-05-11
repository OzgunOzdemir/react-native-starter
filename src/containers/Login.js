import React from 'react'
import { Text, View, Button } from 'react-native'

function Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button onPress={() => navigation.navigate('Dashboard')} title="Go to Dashboard"></Button>
        </View>
    )
}

export default Login;

