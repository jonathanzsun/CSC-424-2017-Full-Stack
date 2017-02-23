import React, { Component } from 'react';
import {
    AppRegistry
}   from 'react-native';

import Login from './src/pages/Login';

export default class ProjectSun extends Component {
    render(){
        return(
            <Login />
        );
    }
}

AppRegistry.registerComponent('ProjectSun', () => ProjectSun)

//Create a src/pages and a Login.js
//npm install --save react-native-vector-icons

//Go to android/app/build.gradle and add reference to package
//dependencies {compile porject(':react-native-vector-icons')}

//Now go to android/settings.gradle and add
//include ':react-native-vector-icons'
//project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')

//Open android/app/src/main/java/com/ProjectSun/MainApplication.java
//import packages:
//import java.util.Arrays;
//import java.util.List;
//import com.oblador.vectoricons.VectorIconsPackage;

//And initialize the whole kitten kaboodle
//@Override
//protected List<ReactPackage> getPackages(){
    //return ANGLE_instanced_arrays.<ReactPackage>asList(
        //new MainReactPackage(),
        //new VectorIconsPackage()
    //);
//}