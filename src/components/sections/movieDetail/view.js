import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import styles from './styles'
import * as Animatable from 'react-native-animatable';

export default class MovieDetails extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            imageExpanded: true,
            animatedHeight: new Animated.Value(200)
        }
    }

    _onShowImage() {
        if(this.state.imageExpanded) {
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: 0,
                    duration: 500,
                }
            ).start()
            this.setState({ imageExpanded: false })
        } else {
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: 200,
                    duration: 500,
                }
            ).start()
            this.setState({ imageExpanded: true })
        }
    }

    render() {
        const { movie } = this.props
        const image = movie && movie.poster_path ? { uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}` } : null

        const title = movie && movie.title ? movie.title : ''
        const overview = movie && movie.overview ? movie.overview.toString() : ''
        const popularity = movie && movie.popularity ? movie.popularity .toString(): ''
        const average = movie && movie.vote_average ? movie.vote_average.toString() : ''
        
        return (

            
            <View style={styles.container}>
                <Animated.Image source={image} resizeMode={'cover'} style={[styles.image, { height: this.state.animatedHeight }]}/>
                <Animatable.View animation={'bounceInLeft'}>
                    <View style={styles.dataContainer}>
                        <Text style={[styles.text, styles.title]}>{title}</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        <Text style={[styles.text, styles.subtitle]}>{overview}</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        <Text style={[styles.text, styles.title]}>{'Popularity: '}</Text>
                        <Text style={styles.text}>{popularity}</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        <Text style={[styles.text, styles.title]}>{'Average: '}</Text>
                        <Text style={styles.text}>{average}</Text>
                    </View>
                </Animatable.View>    
            </View>
            
        )
    }
}