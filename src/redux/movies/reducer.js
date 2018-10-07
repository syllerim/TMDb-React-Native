import * as types from './types'

const initialState = {
    isFetching: false, 
    list: [],
    item: null,
    page: 1,
}

export default function reducer(state = initialState, action = {}) {

    switch (action.type) {
        case types.MOVIES_UPDATE_LIST:
            return {
                ...state,
                list: action.value,
            };

        case types.MOVIES_SET_FETCHING:
            return {
                ...state,
                isFetching: action.value,
            };

        case types.MOVIES_SET_ITEM:
            return {
                ...state,
                item: action.value,
            };

        case types.MOVIES_SET_PAGE:
            return {
                ...state,
                page: action.value,
            };

        default: 
            return state;
    }
}