import { connect } from 'react-redux'
import * as MoviesActions from '../../../redux/movies/actions'
import View from './view'

const mapStateToProps = (state) => {

    return {
        movie: state.movies.item,
        isFetching: state.movies.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSubmitMovie: (data) => {
            dispatch(MoviesActions.postMovie(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)