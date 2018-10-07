import View from './view'
import { connect } from 'react-redux' 

const mapStateToProps = (state) => {
    return {
        movie: state.movies.item,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)