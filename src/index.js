import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <nav className="main-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={App}/>
                        <Route path="/about" exact component={About}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
