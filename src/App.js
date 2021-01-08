import React, {Component} from 'react';
import Home from './Views/Home';
import Settings from './Views/Settings';
import Addpurchase from './Views/Addpurchase';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact={true} path='/' render={() => (
                        <div className="App">
                            <Home/>
                        </div>
                    )}/>
                    <Route exact={true} path='/Settings' render={() => (
                        <div className="App">
                            <Settings/>
                        </div>
                    )}/>
                    <Route exact={true} path='/Addpurchase' render={() => (
                        <div className="App">
                            <Addpurchase/>
                        </div>
                    )}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
