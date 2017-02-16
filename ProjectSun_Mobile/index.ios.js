import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import LoginScreen from "./Screens/Login/login";
import SignupScreen from "./Screens/signup/signup";

export default class screens extends Component {
    render() {
        return (
            <View style={styles.container}>
              <LoginScreen/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('ProjectSun', () => screens);
