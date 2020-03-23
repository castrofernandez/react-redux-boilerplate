import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default (component) => {
    const mapStateToProps = (state) => {
        return {
            example: state.example
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators(
            {
            },
            dispatch
        );
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(component);
};
