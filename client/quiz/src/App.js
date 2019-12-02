import React, {Component, Fragment} from 'react';
import {ReactReduxInternetConnection} from 'react-redux-internet-connection';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {style} from "react-toastify";
import "moment/min/locales";
import "./view/style/css/App.css";

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
                    {
                        this.props.loading ?
                            <div className="loading">Loading&#8230;</div>
                            :
                            null
                    }
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
    let {loading, student, logoUrl} = state.core.information;
    return {loading, student, logoUrl};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
