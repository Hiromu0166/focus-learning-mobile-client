import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class ReportScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Here is Report Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ReportScreen;