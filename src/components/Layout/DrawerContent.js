import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont()

function CustomDrawerContent(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer, { backgroundColor: props.headerContainerBackgroundColor}]}>
                <View style={styles.imageContainer}>
                    <View style={styles.image}>
                        <Icon name="user-o" size={50} color="#ffffff" />
                    </View>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>NickName</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        label="Çıkış"
                        onPress={() => props.navigation.navigate('Login')}
                    />
                </DrawerContentScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10
    },
    contentContainer: {
        flex: 3
    },
    imageContainer: {
        flex: 1
    },
    nameContainer: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderWidth: 2,
        borderColor: "#cccccc",
        backgroundColor: "#cccccc",
        justifyContent: "center",
        alignItems: "center"
    },
    nameText: {
        color: "#ffffff",
        fontSize: 20
    }
})

export { CustomDrawerContent };