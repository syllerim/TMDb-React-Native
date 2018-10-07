import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { MovieCell } from './../../widgets/'
import styles from './styles'
import { connect } from 'react-redux'
import * as MoviesActions from './../../../redux/movies/actions'

class Movies extends Component {

    componentDidMount() {
        this.props.fetchGenreMovies()
    }
    
    _onEndReached(i) {
        console.log("_onEndReached i: ", i)
        this.props.updatePage()
        // this.props.fetchGenreMovies()
    }

    _onMovieTapped(house) {
        this.props.onMovieTapped(house)
    }
    
    _renderItem(item, index) {
        return <MovieCell 
                    movie={item}
                    onMoviePress={this.props.onMovieTapped}
                    index={index}
                />
    }

    _renderActivityIndicator() {
        if(!this.props.isFetching) {
            return null
        }
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
                <ActivityIndicator size={'large'} color={'white'} animating={true} />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.list}
                    renderItem={({ item, index}) => this._renderItem(item, index) }
                    keyExtractor={(item, i) => 'movie' + item.id}
                    onRefresh={ () => this.props.fetchGenreMovies()}
                    refreshing={this.props.isFetching}
                    onEndReached={ (i) => this._onEndReached(i)}
                    numColumns={2}
                    style={{paddingTop: 0}}
                />
                { this._renderActivityIndicator() }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.movies.list,
        isFetching: state.movies.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchGenreMovies: () => {
            dispatch(MoviesActions.fetchMoviesForGenre())
        },
        onMovieTapped: (movie) => {
            dispatch(MoviesActions.setItem(movie))
            Actions.movieDetails({ title: movie.title })
        },
        updatePage: () => {
            dispatch(MoviesActions.updatePage())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
