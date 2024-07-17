import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, BackHandler, TouchableWithoutFeedback, Keyboard, Text } from "react-native";

export default Cadastro_p = () => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const backAction = () => {
            if (isFocused) {
                Keyboard.dismiss();
                setIsFocused(false);
                return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove();
    }, [isFocused]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const dismissKeyboard = () => {
        Keyboard.dismiss();
        setIsFocused(false);
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                <TextInput style={styles.input} onFocus={handleFocus} onBlur={handleBlur} />
                <Text style={[styles.text, { opacity: isFocused ? 0 : 1 }]}>
                    Este texto desaparece quando o TextInput está focado.
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: 200,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
    },
    text: {
        marginTop: 20,
        fontSize: 18,
    },
});
