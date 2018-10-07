import * as types from './types'

function setFetching(value) {
    return {
        type: types.GENRES_SET_FETCHING,
        value: value
    }
}

export function setList(value) {
    return {
        type: types.GENRES_UPDATE_LIST,
        value,
    }
}

export function setItem(value) {
    return {
        type: types.GENRES_SET_ITEM,
        value
    }
}

export function fetchGenresList() {
    return (dispatch, getState, api) => {

        dispatch(setFetching(true))
        api
            .fetchGenres()
            .then( res => {
                dispatch(setFetching(false))
                dispatch(setList(res.data.genres))
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log("fetchGenresList error: ", err)
            })  
    }
}
