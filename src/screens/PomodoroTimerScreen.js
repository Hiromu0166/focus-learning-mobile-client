import React, { Component } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import axios from '../http/AxiosLearningSession';

class PomodoroTimerScree extends Component {

    registerLearningSession = () => {
        const learningSession = {
                learnTimeSec: 60,
                userId: 'testUser'
        }
        axios.post('/register', learningSession)
            .then(response => {
                alert('success');
            })
            .catch(error => {
                alert('error');
            }
        );
    }


    render() {
        return(
            <View style={styles.container}>
                <Text>Here is Pomodoro Timer Screen</Text>
                <Button
                    onPress={() => this.registerLearningSession()}
                    title="Register Learning learningSession"
                />
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