import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    ScrollView
} from 'react-native';

import LoginScreen from "./Screens/Login/login";
import SignupScreen from "./Screens/signup/signup";
import MainView from "./Screens/mainView/mainView";

export default class App extends Component {
    renderScene(route, navigator) {
        //nav to the login page --Ty
        if(route.name == 'Login') {
            return <LoginScreen navigator={navigator} {...route.passProps}  />
        }
        //nav to the sign up page --Ty
        if(route.name == 'Sign Up') {
            return <SignupScreen navigator={navigator} {...route.passProps}  />
        }
        
        //This is the Nav for the main page. --Ty
        if(route.name == 'MainView'){
            return <MainView navigator={navigator} {...route.passProps} />
        }
    }

    render() {
        return (
                /*Navigator is used to switch between pages.*/
                <Navigator
                    style={{ flex:1 }}
                    initialRoute={{ name: 'Login' }}
                    renderScene={ this.renderScene } />

        )
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     }
// });

AppRegistry.registerComponent('ProjectSun', () => App);

/*
TODO
Add ScrollView
 */

