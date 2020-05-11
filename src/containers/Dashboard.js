import React from 'react'
import { Text, View, Button } from 'react-native'

function Dashboard({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard Screen</Text>
            <Button onPress={() => navigation.goBack()} title="Go Back"></Button>
        </View>
    )
}

export default Dashboard;

