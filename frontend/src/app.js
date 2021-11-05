"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchPageView } from "./ViewController/SearchPageView";
import { SearchResultView } from "./ViewController/SearchResultView";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'FindMyTutor',
            routes: [
                { component: SearchPageView, path: '/', exact: true },
                { component: SearchResultView, path: '/searchResult', exact: true }
            ]
        };
    }

    componentDidMount() {
        document.title = this.state.title;
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route} />))}
                    </Switch>
                </Router>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        );
    }
}
