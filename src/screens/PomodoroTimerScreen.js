import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class PomodoroTimerScree extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Here is Pomodoro Timer Screen</Text>
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

export default PomodoroTimerScree;