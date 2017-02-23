import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
} from 'reat-native';

const Label = (props) => {
    return (
        <Text
        style={props.styles && props.styles.textLabel ? props.styles.textLabel : styles.textLabel}>
        {props.text}
        </Text>
    );
}

const styles = StyleSheet.create({
    textLabel: {
        fontsize: 15,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        marginBottom: 20,
        color: '#595959'
    }
});

export default Label;