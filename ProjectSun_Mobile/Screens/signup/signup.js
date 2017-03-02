import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Navigator
} from 'react-native'
/*
Login SDK and button for Facebook
 */
const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
} = FBSDK;

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");

export default class SignupView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={background}
                    style={[styles.container, styles.bg]}
                    resizeMode="cover"
                >
                    <View style={styles.headerContainer}>

                        <View style={styles.headerIconView}>
                            { /*
                            This is the back button used to go back to the 'Login' route.
                                 onPress={ () => this.props.navigator.pop()} sends the scene page back to the
                                 Login page. Just think of it like a stack. It goes back one page.
                                 Login PUSH-> Sign Up POP -> Login

                                 --Ty
                         */}
                            <TouchableOpacity style={styles.headerBackButtonView} onPress={ () => this.props.navigator.pop()}>
                                <Image
                                    source={backIcon}
                                    style={styles.backButtonIcon}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.headerTitleView}>
                            <Text style={styles.titleViewText}>Sign Up</Text>
                        </View>

                    </View>

                    <View style={styles.inputsContainer}>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={personIcon}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Name"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={emailIcon}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Email"
                                placeholderTextColor="#FFF"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={lockIcon}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                secureTextEntry={true}
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Password"
                                placeholderTextColor="#FFF"
                            />
                        </View>
                        <View style={styles.headerContainer}>
                            <View style={styles.facebook}>
                                <LoginButton
                                    onLoginFinished={
                                        (error, result) => {
                                            if (error) {
                                                alert("login has error: " + result.error);
                                            } else if (result.isCancelled) {
                                                alert("login is cancelled.");
                                            } else {
                                                AccessToken.getCurrentAccessToken().then(
                                                    (data) => {
                                                        this.goToHomePage();
                                                    }
                                                )
                                            }
                                        }
                                    }
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.footerContainer}>

                        <TouchableOpacity>
                            <View style={styles.signup}>
                                <Text style={styles.whiteFont}>Join</Text>
                            </View>
                        </TouchableOpacity>
                        {/*Using navigator.push here instead of pop just incase we use this page elsewhere.
                            The back button have a different function anyway
                            WARNING!!!!
                            This could possibly be an issue. Technically we are just pushing the Login again so the stack looks like..
                            Login->Sign Up -> Login.. which a user could recursively push on top of each other making the
                            navigator hierarchy really big. pop() could be used instead of push. Might change later.

                            --Ty
                            */}
                        <TouchableOpacity onPress={ () => this.props.navigator.push({name:'Login'})}>
                            <View style={styles.signin}>
                                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
                            </View>
                        </TouchableOpacity>
                        <View>

                        </View>
                    </View>
                </Image>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    facebook:{
        paddingTop: 30,
        alignItems: "center"

    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null
    },
    headerContainer: {
        flex: 1,
    },
    inputsContainer: {
        flex: 3,
        marginTop: 50,
    },
    footerContainer: {
        flex: 1
    },
    headerIconView: {
        marginLeft: 10,
        backgroundColor: 'transparent'
    },
    headerBackButtonView: {
        width: 25,
        height: 25,
    },
    backButtonIcon: {
        width: 25,
        height: 25
    },
    headerTitleView: {
        backgroundColor: 'transparent',
        marginTop: 25,
        marginLeft: 25,
    },
    titleViewText: {
        fontSize: 40,
        color: '#fff',
    },
    inputs: {
        paddingVertical: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        flexDirection: 'row',
        height: 75,
    },
    iconContainer: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon: {
        width: 30,
        height: 30,
    },
    input: {
        flex: 1,
        fontSize: 20,
    },
    signup: {
        backgroundColor: '#FF3366',
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    signin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF'
    }
})