import React from 'react'
import { View, StyleSheet } from 'react-native';
import { InputComponent, ButtonComponent } from '../components/Ui/index.js'

function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <View style={styles.inputContainer}>
                    <InputComponent placeholder="Lütfen e-mail giriniz..." />
                </View>
            </View>
            <View style={styles.secondContainer}>
                <ButtonComponent 
                width={80} height={80} borderRadius={40} 
                backgroundColor="#1f78d1"
                borderWidth={2}
                borderColor="#ffffff"
                onPress={() => navigation.navigate("Dashboard")}>Ok</ButtonComponent>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c4c4c4"
    },
    firstContainer: {
        height: 300,
        backgroundColor: "#1f78d1",
        justifyContent: "flex-end"
    },
    inputContainer: {
        paddingHorizontal: 20,
        position: "absolute",
        top: 265,
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    secondContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});


export default Login;

