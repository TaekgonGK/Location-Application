import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return <>
        <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')} />
        <Button title="Go to main Flow" onPress={() => navigation.navigate('mainFlow')} />
    </>
}

const styles = StyleSheet.create({});

export default SignupScreen;