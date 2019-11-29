import React from 'react';
import './view/style/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import AppStore from './view/store/store';
import registerServiceWorker from './registerServiceWorker';
import App from "./App";
import Events from './view/component/events'
import Information from "./view/component/information/Information";
import Question from "./view/component/question/Question";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => <Component {...props} />}
    />
);


ReactDOM.render(
    <Provider store={AppStore}>
        <Router>
            <div>
                <PrivateRoute component={App}/>
                <Switch>
                    <PrivateRoute path="/" exact component={Information}/>
                    <PrivateRoute path="/question" exact component={Question}/>
                </Switch>
                <Events/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
