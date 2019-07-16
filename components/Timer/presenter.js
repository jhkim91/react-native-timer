import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

function formatTime(time) {
    let minutes = Math.floor(time/60);
    time -= minutes * 60
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
}
class Timer extends Component {
    componentWillReceiveProps(nextProps, nextContext) {
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying) {
            const timerInterval = setInterval(() => {
                currentProps.addSecond()
            }, 1000);
            this.setState({
                timerInterval
            });
        } else if(currentProps.isPlaying && !nextProps.isPlaying) {
            clearInterval(this.state.timerInterval);
        }
    }

    render() {
        console.log(this.props);
        const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timerDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                        <Button iconName="play-circle" onPress={startTimer} />
                    )}
                    {isPlaying && (
                        <Button iconName="stop-circle" onPress={restartTimer} />
                        /*삼항연산에서 조건이아닐때 null인경우 ? 대신 &&을 써주면 조건이 아닐때 null을 대신한다*/
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    upper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lower: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        color: 'white',
        fontSize: 120,
        fontWeight: '100'
    }
});

export default Timer;