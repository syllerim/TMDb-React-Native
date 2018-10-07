import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        index: 0,
        movie: null,
        onMoviePress: () => {},
    }
    
    render() {
        const { movie, index } = this.props
        const image = movie && movie.poster_path ? { uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}` } : null
        return (
            <TouchableOpacity style={styles.cellContainer} onPress={() => this.props.onMoviePress(movie)}>
                <Image source={ image } style={{ width: '100%', height: '100%'}} resizeMode={'cover'}/>
            </TouchableOpacity>
        )
    }
}
