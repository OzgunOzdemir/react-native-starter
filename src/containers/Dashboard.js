import React from 'react'
import { Text, View, Button } from 'react-native'
import { HeaderComponent } from '../components/Layout/Header.js'

function Dashboard({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <HeaderComponent backgroundColor="#1f78d1" headerTitle="Anasayfa" headerTitleColor="#ffffff"/>
            <Text>Dashboard Screen</Text>
            <Button onPress={() => navigation.goBack()} title="Go Back"></Button>
        </View>
    )
}

export default Dashboard;

