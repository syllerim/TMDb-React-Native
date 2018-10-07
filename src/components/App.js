import React, { Component } from 'react'
import { StatusBar, TouchableOpacity, Text } from 'react-native'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Genres, Movies, MovieDetails, MovieAdd } from './sections/'
import * as api from './../api/'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './../redux/'
const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
)

const sceneDefaultStyles = {
  navigationBarStyle: { backgroundColor: 'rgb(24,24,24)'},
  backButtonTintColor: 'white',
  backButtonTextStyle: { color: 'white' },
  titleStyle: { color: 'white' },
}

const RightButton = props => (
  <TouchableOpacity style={{padding: 10}} onPress={ () => Actions.movieAdd() }>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{'Añadir'}</Text>
  </TouchableOpacity>
)

export default class App extends Component {
 
    componentWillMount() {
        api.configureAxios()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
        <Provider store={store}>
                <Router>
                    <Stack key="root">
                        <Scene key="genres" component={Genres} {...sceneDefaultStyles} hideNavBar={false} initial={true} title={'TMDb Movies Genre'}/>
                        <Scene key="movies" component={Movies} {...sceneDefaultStyles} renderRightButton={RightButton}/>
                        <Scene key="movieDetails" component={MovieDetails} {...sceneDefaultStyles}/>
                        <Scene key='movieAdd' component={MovieAdd} title={'Add Movie'} {...sceneDefaultStyles}/>
                    </Stack>
                </Router>
        </Provider>
    )}
}