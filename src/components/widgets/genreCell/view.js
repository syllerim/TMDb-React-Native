import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        genre: null,
        onGenrePress: () => {},
    }

    render() {
        const { genre } = this.props
        const name = genre? genre.name : ''
        return (
            <TouchableOpacity onPress={ () => this.props.onGenrePress(genre) } style={styles.cellContainer}>
               <Text style={[styles.label, styles.name]}>{name}</Text>
            </TouchableOpacity>
        )
    }
}
