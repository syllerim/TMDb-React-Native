import * as types from './types'

function setFetching(value) {
    return {
        type: types.MOVIES_SET_FETCHING,
        value: value
    }
}

export function setList(value) {
    return {
        type: types.MOVIES_UPDATE_LIST,
        value,
    }
}

export function setItem(value) {
    return {
        type: types.MOVIES_SET_ITEM,
        value
    }
}

export function setPage(value) {
    return {
        type: types.MOVIES_SET_PAGE,
        value
    }
}

export function fetchMoviesForGenre() {
    return (dispatch, getState, api) => {

        const genre = getState().genres.item
        const page = getState().movies.page

        if(!genre) {
            return
        }

        dispatch(setList([]))
        dispatch(setFetching(true))
        api
            .fetchMoviesForGenreId(genre.id, page)
            .then( res => {
                dispatch(setFetching(false))
                dispatch(setList(res.data.results))
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log("fetchGenresList error: ", err)
            })  
    }
}

export function updatePage() {
    return (dispatch, getState) => {

        const page = getState().movies.page

        if(!page) {
            return
        }

        dispatch(setPage(page+1))
    }
}


export function resetPage() {
    return (dispatch) => {
        dispatch(setPage(1))
    }
}

export function postMovie(data) {
    return (dispatch, getState, api) => {

        const movie = getState().movies.item
        if(!data || !movie) {
            return
        }

        dispatch(setFetching(true))

        const movieData = {
            ...data,
            id: movie.id
        }

        api
            .postMovie(movieData)
            .then( res => {
                dispatch(setFetching(false))
                dispatch(fetchMoviesForGenre())
                Actions.pop()
            }).catch( err => {
                dispatch(setFetching(false))
                console.log("postHouseCharacter err: ", err)
            })
    }
}