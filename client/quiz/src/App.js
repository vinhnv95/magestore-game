import React, {Component, Fragment} from 'react';
import {ReactReduxInternetConnection} from 'react-redux-internet-connection';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {style} from "react-toastify";
import "moment/min/locales";

style({
    zIndex: 10001,
});

class App extends Component {

    /**
     * render
     * @returns {*}
     */
    render() {
        const {children} = this.props;
        return (
            <Fragment>
                <div>
                    <ReactReduxInternetConnection/>
                    {children}
                </div>
            </Fragment>
        );
    }
}

App.propTypes = {
    children: PropTypes.array,
    history: PropTypes.object,
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
